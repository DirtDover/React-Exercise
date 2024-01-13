import loader from "./assets/loader.svg";
import browser from "./assets/browser.svg"
import { useEffect, useState } from "react";
import "./App.css"
const APIKEY = "46e35c2d-9f61-4784-9a6d-a399c560ae20"

function App() {
 
  const [weatherData, setWeatherData] = useState(null)
  const [errorInfo, setErrorInfo] = useState(null)

useEffect(() => {

  fetch(`http://api.airvisual.com/v2/nearest_city?key=${APIKEY}`)
  .then(response => {
    console.log(response);
    if(!response.ok) throw new Error (`Error ${response.status}, ${response.statusText}`)
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
  })
  .catch(err => {
    console.log(err);
    console.dir(err);
    setErrorInfo(err.message)
  })

},[])




  return (
      <main>
        <div className={`loader-container ${(!weatherData && !errorInfo) && "active"}`}>
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

          {(errorInfo && !weatherData) && (
            <>
              <p className="error-information">{errorInfo}</p>
              <img src={browser} alt="error icon" />
            </>
          )}

      </main>
  
  );
}

export default App;
