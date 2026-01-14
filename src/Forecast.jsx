import React from "react";
import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {
  function displayForecast(response) {
    console.log(response.data);
  }
  let apiKey = "c2t7ea4432f52e0o6d402fd54c5bc269";
  let city = props.city;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units{metric}`;

  axios.get(apiUrl).then(displayForecast);

  return (
    <div className="Forecast">
      <div className="container">
        <div className="row">
          <div className="col">
            <ul>
              <li className="weekday">Day 1</li>
              <li>
                <span className="temp-day">20°</span>{" "}
                <span className="temp-night">9°</span>
              </li>
              <li className="forecast-condition">Cloudy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
