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
            <div className="city-column">
              <h3 className="city">{weather.city}</h3>
              <h4 className="country">({weather.country})</h4>
            </div>
          </div>

          <div className="d-flex">
            <div className="temperature-and-icon text-center">
              <span className="temperature-value">
                {Math.round(weather.temperature)}
                <span className="temperature-unit align-top">°C</span>
              </span>
              <img
                src={`https://shecodes-assets.s3.amazonaws.com/api/weather/icons/${weather.icon}.png`}
                alt={weather.icon}
              />
            </div>
          </div>
          <div className="weather-info">
            <ul>
              <li>
                <span className="weather-info-text">Weather right now is</span>{" "}
                <span className="weather-info-value">
                  {weather.description}
                </span>
              </li>
              <li>
                <span className="weather-info-text">Humidity is</span>{" "}
                <span className="weather-info-value">
                  {Math.round(weather.humidity)}%
                </span>
              </li>
              <li>
                <span className="weather-info-text">Wind speed is</span>{" "}
                <span className="weather-info-value">
                  {Math.round(weather.wind)} km/h
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return form;
  }
}
