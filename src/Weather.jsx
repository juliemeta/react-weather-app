import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      city: response.data.city,
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
        placeholder="Search for a city"
        autoFocus="on"
        onChange={updateCity}
      />
      <button className="btn btn-info" type="submit">
        Search
      </button>
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <h2>{weather.city}</h2>
        <ul>
          <li>
            Temperature is {Math.round(weather.temperature)} degrees celsius
          </li>
          <li>Weather is {weather.description}</li>
          <li>Humidity is {Math.round(weather.humidity)}%</li>
          <li>Wind is {Math.round(weather.wind)} km/h</li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
