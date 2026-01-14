import React, { useState } from "react";
import Temperature from "./Temperature";
import FormattedDate from "./FormattedDate";
import Forecast from "./Forecast";
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
      date: new Date(response.data.time * 1000),
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
              <h1 className="city">{weather.city}</h1>
              <h2 className="country">{weather.country}</h2>
            </div>
          </div>
          <div>
            <div className="temperature-and-icon">
              <Temperature celsius={weather.temperature} />
              <img
                src={`https://shecodes-assets.s3.amazonaws.com/api/weather/icons/${weather.icon}.png`}
                alt={weather.icon}
              />
            </div>
            <FormattedDate date={weather.date} />
          </div>

          <div className="container">
            <div className="row">
              <div className="col-6 text-end weather-column left-column">
                <ul>
                  <li>
                    <span className="weather-info-text">Weather is</span>
                  </li>

                  <li>
                    <span className="weather-info-text">Humidity is </span>
                  </li>
                  <li>
                    <span className="weather-info-text">Wind speed is </span>
                  </li>
                </ul>
              </div>

              <div className="col-6 text-start weather-column right-column">
                <ul>
                  <li>
                    <span className="weather-info-value">
                      {weather.description}
                    </span>
                  </li>
                  <li>
                    <span className="weather-info-value">
                      {Math.round(weather.humidity)}%
                    </span>
                  </li>
                  <li>
                    <span className="weather-info-value">
                      {Math.round(weather.wind)} km/h
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Forecast city={weather.city} />
        </div>
      </div>
    );
  } else {
    return form;
  }
}
