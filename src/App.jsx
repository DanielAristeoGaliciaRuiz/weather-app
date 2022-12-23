import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'

import { MainTemperature } from './assets/components/MainTemperature'
import { WeatherInformation } from './assets/components/WeatherInformation'


function App() {

  const [weather, setWeather] = useState()
  const [coords, setCoords] = useState()
  const [temperature, setTemperature] = useState()
  const [newCity, setNewCity] = useState("")

  const succes=(pos)=>{
    const currentCoords={ 
      lat:pos.coords.latitude,
      long:pos.coords.longitude
    }
    setCoords(currentCoords)
  }


  useEffect(() => {
    navigator.geolocation.getCurrentPosition(succes)
  }, [])
  const [changeTemp, setChangeTemp] = useState(true)

  useEffect(() => {
    if(coords){
      const API_KEY=`0e87f2fe824ad78200e1773486dadbe9`
      const URL=`https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.long}&appid=${API_KEY}`

      axios.get(URL)
      .then((res)=>{
        const kelvinTemp=res.data.main.temp
        const fahrenheitTemp=((kelvinTemp-273.15)*(9/5))+32
        const celciusTemp=(fahrenheitTemp-32)*(5/9)

        const a=res.data.main.feels_like
        const flikeFahrenheit=((a-273.15)*(9/5))+32
        const flikeCelcius=(flikeFahrenheit-32)*(5/9)

        const b=res.data.main.temp_max
        const maxTempFahrenheit=((b-273.15)*(9/5))+32
        const maxTempCelcius=(maxTempFahrenheit-32)*(5/9)
        
        const c=res.data.main.temp_min
        const minTempFahrenheit=((c-273.15)*(9/5))+32
        const minTempCelcius=(minTempFahrenheit-32)*(5/9)
        
        const temp={
          fahrenheit:fahrenheitTemp,
          celcius:celciusTemp,
          feelsFahrenheit:flikeFahrenheit,
          feelsCelcius:flikeCelcius,
          maxFahrenheit:maxTempFahrenheit,
          maxCelcius:maxTempCelcius,
          minFahrenheit:minTempFahrenheit,
          minCelcius:minTempCelcius
        }
        setWeather(res.data)
        setTemperature(temp)
      })
      .catch(err=>console.log(err))
    }
      }, [coords])
  
  
//--------------------------------------------------///


const handleClick=()=>{
  setChangeTemp(!changeTemp)
}




const getNewCity=(city)=>{
  const API_KEY=`0e87f2fe824ad78200e1773486dadbe9`
  const URL=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      axios.get(URL)
      .then((res)=>{
        const kelvinTemp=res.data.main.temp
        const fahrenheitTemp=((kelvinTemp-273.15)*(9/5))+32
        const celciusTemp=(fahrenheitTemp-32)*(5/9)

        const a=res.data.main.feels_like
        const flikeFahrenheit=((a-273.15)*(9/5))+32
        const flikeCelcius=(flikeFahrenheit-32)*(5/9)

        const b=res.data.main.temp_max
        const maxTempFahrenheit=((b-273.15)*(9/5))+32
        const maxTempCelcius=(maxTempFahrenheit-32)*(5/9)
        
        const c=res.data.main.temp_min
        const minTempFahrenheit=((c-273.15)*(9/5))+32
        const minTempCelcius=(minTempFahrenheit-32)*(5/9)
        
        const temp={
          fahrenheit:fahrenheitTemp,
          celcius:celciusTemp,
          feelsFahrenheit:flikeFahrenheit,
          feelsCelcius:flikeCelcius,
          maxFahrenheit:maxTempFahrenheit,
          maxCelcius:maxTempCelcius,
          minFahrenheit:minTempFahrenheit,
          minCelcius:minTempCelcius
        }
        setWeather(res.data)
        setTemperature(temp)
      })
      .catch((err)=>{
        setNewCity("")
        alert("Not found this place")})
}
  const handleOnChange=(e)=>{
      setNewCity(e.target.value)
  }

 
  return (
    <div className="App">
 

      <section className='section-city-weather'>
          
      <input onChange={handleOnChange} value={newCity} id="cityName" className='input-city' type="text" placeholder='Enter city' />

      <button onClick={()=>getNewCity(newCity)} className='search-city-btn'>Search City</button>
         
    
        <button onClick={handleClick} className='degrees-button'>Degrees °F/°C</button>
       
      </section>
 
        
          {weather?(<MainTemperature weather={weather} temperature={temperature} changeTemp={changeTemp}/>):<p>loading</p>}

          {weather? (<WeatherInformation temperature={temperature} changeTemp={changeTemp} weather={weather}/>): <p>""</p> }
          
         
    </div>
  )
}

export default App
