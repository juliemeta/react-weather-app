import React, { use, useState } from "react";
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

  if (loaded) {
    return (
      <div className="Forecast">
        <div className="container">
          <div className="row">
            <div className="col">
              <ul>
                <li className="weekday">Day 1</li>
                <li>{forecast[0].condition.icon}</li>
                <li>
                  <span className="temp-day">
                    {Math.round(forecast[0].temperature.maximum)}°
                  </span>{" "}
                  <span className="temp-night">
                    {forecast[0].temperature.minimum}°
                  </span>
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
