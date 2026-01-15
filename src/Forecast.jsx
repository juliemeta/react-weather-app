import React, { useState, useEffect } from "react";
import "./Forecast.css";
import axios from "axios";
import ForecastDays from "./ForecastDays";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.city]);

  function displayForecast(response) {
    setLoaded(true);
    setForecast(response.data.daily);

    console.log(response.data);
  }

  if (loaded) {
    return (
      <div className="Forecast">
        <div className="container">
          <div className="row gy-5">
            {forecast.map(function (dailyForecast, index) {
              if (index < 5) {
                return (
                  <div className="col forecast-column" key={index}>
                    <ForecastDays data={dailyForecast} />
                  </div>
                );
              }
            })}
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
