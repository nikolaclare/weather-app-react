import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <input type="search" placeholder="Enter a city..." />
        <input type="submit" value="Search"/>
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