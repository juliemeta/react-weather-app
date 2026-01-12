import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState("Tokyo");
  const [country, setCountry] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      city: response.data.city,
      country: response.data.country,
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      icon: response.data.condition.icon,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "c2t7ea4432f52e0o6d402fd54c5bc269";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Search for a city... "
        className="city-search"
        autoFocus="on"
        onChange={updateCity}
      />
      <button className="btn search-btn" type="submit">
        🌧 / ☀ ?
      </button>
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <div className="container weather-container">
          <div className="row">
            <div className="col-6 city-column">
              <h3 className="city">{weather.city}</h3>
              <h4 className="country">({weather.country})</h4>
            </div>

            <div className="col-6 weather-info-column">
              <ul>
                <li>Weather right now is {weather.description}</li>
                <li>Humidity is {Math.round(weather.humidity)}%</li>
                <li>Wind speed is {Math.round(weather.wind)} km/h</li>
              </ul>
            </div>
          </div>

          <div className="row d-flex align-items-center">
            <div className="col-6 temperature-column">
              <div className="temperature-value">
                {Math.round(weather.temperature)}
                <span className="temperature-unit align-top">°C</span>
              </div>
            </div>
            <div className="col-6 weather-icon-column">
              <img
                src={`https://shecodes-assets.s3.amazonaws.com/api/weather/icons/${weather.icon}.png`}
                alt={weather.icon}
              />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return form;
  }
}
