import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.current.temp,
      city: response.data.city,
    });
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    const apiKey = "1a738c57f3cdc4d4f4c077e40a2facee";
    let apiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
            <input type="search" placeholder="Enter a city..." className="form-control ssearch-input" onChange={handleCityChange} />
            </div>
            <div className="col-3 p-0">
            <input type="submit" value="Search" className="btn btn-primary w-100" />
          </div>
          </div>
        </form>
        <footer>
          This project was coded by{" "}
          <a href="https://nikola-ashton-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer">
            Nikola Ashton</a>{" "}and is open-sourced on{" "}
          <a href="https://github.com/nikolaclare/weather-app-react" target="_blank" rel="noopener noreferrer">GitHub</a>{" "}
          and hosted on {" "}<a href="https://project-weatherapp-react.netlify.app/" target="_blank" rel="noopener noreferrer">Netlify</a>
        </footer>
      </div>
    )
  }
