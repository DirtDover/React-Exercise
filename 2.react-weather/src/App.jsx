import loader from "./assets/loader.svg"
import { useEffect, useState } from "react";
import "./App.css"
const APIKEY = "46e35c2d-9f61-4784-9a6d-a399c560ae20"

function App() {
 
  const [weatherData, setWeatherData] = useState(null)

useEffect(() => {

  fetch(`http://api.airvisual.com/v2/nearest_city?key=${APIKEY}`)
  .then(response => {
    console.log(response);
    return response.json()
  })
  .then(responseData => {
    console.log(responseData);
    setWeatherData({
      city: responseData.data.city,
      country: responseData.data.country,
      iconID: responseData.data.current.weather.ic,
      temperature: responseData.data.current.weather.tp,
    })
  } )

},[])




  return (
      <main>
        <div className={`loader-container ${!weatherData && "active"}`}>
          <img src={loader} alt="loading icon" />
        </div>
        
        {weatherData && (
          <>
          <p className="city-name">{weatherData.city}</p>
          <p className="country-name">{weatherData.country}</p>
          <p className="temperature">{weatherData.temperature}°</p>
          <div className="info-icon-container">
            <img src={`/icons/${weatherData.iconID}.svg`} className="info-icon" alt="weather icon" />
          </div>
          </>
        )}
      </main>
  
  );
}

export default App;
