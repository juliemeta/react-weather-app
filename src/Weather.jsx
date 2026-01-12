import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState("");
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
        <h3 className="city">{weather.city}</h3>
        <h4 className="country">({weather.country})</h4>
        <div className="weather-info">
          <ul>
            <li>
              Temperature is {Math.round(weather.temperature)} degrees celsius
            </li>
            <li>Weather is {weather.description}</li>
            <li>Humidity is {Math.round(weather.humidity)}%</li>
            <li>Wind is {Math.round(weather.wind)} km/h</li>
          </ul>
        </div>
      </div>
    );
  } else {
    return form;
  }
}
