import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      feels_like: response.data.temperature.feels_like,
      wind: response.data.wind.speed,
      description: response.data.condition.description,
      icon: response.data.condition.icon,
      city: response.data.city,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }
  
  function search() {
    const apiKey = "04aft6704ff52a4b6b603b4986c4oc2a";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input type="search" placeholder="Enter a city..." className="form-control search-input" onChange={handleCityChange} />
            </div>
            <div className="col-3 p-0">
              <input type="submit" value="Search" className="btn btn-primary w-100" />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <footer>
          This project was coded by{" "}
          <a href="https://nikola-ashton-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer">
            Nikola Ashton</a>{" "}and is open-sourced on{" "}
          <a href="https://github.com/nikolaclare/weather-app-react" target="_blank" rel="noopener noreferrer">GitHub</a>{" "}
          and hosted on {" "}<a href="https://project-weatherapp-react.netlify.app/" target="_blank" rel="noopener noreferrer">Netlify</a>
        </footer>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
