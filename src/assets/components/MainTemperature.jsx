import React from 'react'

export const MainTemperature = ({temperature,changeTemp,weather}) => {
  return (
    <section className='section-main-temperature'>
         <div className='information-img-container'>
        
            <div>
                <p>{weather.name}</p> 
                <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} alt="" />
                <p>{weather.weather[0].description}</p>
            </div>    
        </div>
            <div>
                <h2>{changeTemp? `${temperature.celcius.toFixed(2)} °C`:`${temperature.fahrenheit.toFixed(2)} °F`}</h2>   
            </div>
    </section>
  )
}
