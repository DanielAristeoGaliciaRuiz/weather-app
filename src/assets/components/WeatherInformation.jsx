import React from 'react'

export const WeatherInformation = ({weather,temperature,changeTemp}) => {
  return (
    <div className='weatherInformation-card-container'>
        
        <div className='card-container'>
        <div className='icon-container'>     
        <i className='bx bx-wind'></i> <p>Wind Speed</p>             
        </div>
       
        <div>
            <h3>{weather?.wind.speed} m/s</h3>
        </div>
        </div>

         <div className='card-container'>
        <div className='icon-container'>  
        <i className='bx bx-cloud'></i> <p>Clouds</p>                  
        </div>
       
        <div>
            <h3>{weather?.clouds.all} %</h3>
        </div>
        </div>

        <div className='card-container'>
        <div className='icon-container'>  
        <p>Pressure </p>                  
        </div>
    
        <div>
            <h3>{weather?.main.pressure} mb</h3>
        </div>
        </div>

        <div className='card-container'>
        <div className='icon-container'>    
        <p>Feels like</p>                
        </div>
        
        <div>
            <h3>{changeTemp? `${temperature.feelsCelcius.toFixed(2)} °C`:`${temperature?.feelsFahrenheit.toFixed(2)} °F`}</h3>
        </div>
        </div>

        <div className='card-container'>
        <div className='icon-container'>    
        <i className="fa-light fa-temperature-arrow-up"></i><p>Max-Temperature</p>                
        </div>
        
        <div>
            <h3>{changeTemp? `${temperature.maxCelcius.toFixed(2)} °C`:`${temperature.maxFahrenheit.toFixed(2)} °F`}</h3>
        </div>
        </div>

        <div className='card-container'>
        <div className='icon-container'>    
        <i className="fa-light fa-temperature-arrow-down"></i><p>Min-Temperature</p>                
        </div>
        
        <div>
            <h3>{changeTemp? `${temperature.minCelcius.toFixed(2)} °C`:`${temperature.minFahrenheit.toFixed(2)} °F`}</h3>
        </div>
        </div>


        

    </div>
  )
}
