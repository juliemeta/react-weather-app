import React, { useState } from "react";
import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function displayForecast(response) {
    setLoaded(true);
    setForecast(response.data.daily);

    console.log(response.data);
  }

  function icon() {
    let icon = forecast[0].condition.icon;
    let iconUrl = `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${icon}.png`;
    return `${iconUrl}`;
  }

  function tempDay() {
    let temperatureDay = Math.round(forecast[0].temperature.maximum);
    return `${temperatureDay}°`;
  }

  function tempNight() {
    let temperatureNight = Math.round(forecast[0].temperature.minimum);
    return `${temperatureNight}°`;
  }

  if (loaded) {
    return (
      <div className="Forecast">
        <div className="container">
          <div className="row">
            <div className="col">
              <ul>
                <li className="weekday">Day 1</li>
                <li>
                  <img src={icon()} alt="{forecast.icon}" />
                </li>
                <li>
                  <span className="temp-day">{tempDay()}</span>{" "}
                  <span className="temp-night">{tempNight()}</span>
                </li>
                <li className="forecast-condition">
                  {forecast[0].condition.description}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "c2t7ea4432f52e0o6d402fd54c5bc269";
    let city = props.city;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units{metric}`;

    axios.get(apiUrl).then(displayForecast);

    return null;
  }
}
