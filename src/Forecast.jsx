import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <ul>
              <li className="weekday">Day 1</li>
              <li>
                <span className="temp-day">20°</span>{" "}
                <span className="temp-night">9°</span>
              </li>
              <li>Cloudy</li>
            </ul>
          </div>
          <div className="col-3">
            <ul>
              <li className="weekday">Day 2</li>
              <li>
                <span className="temp-day">20°</span>{" "}
                <span className="temp-night">9°</span>
              </li>
              <li>Cloudy</li>
            </ul>
          </div>
          <div className="col-3">
            <ul>
              <li className="weekday">Day 3</li>
              <li>
                <span className="temp-day">20°</span>{" "}
                <span className="temp-night">9°</span>
              </li>
              <li>Cloudy</li>
            </ul>
          </div>
          <div className="col-3">
            <ul>
              <li className="weekday">Day 4</li>
              <li>
                <span className="temp-day">20°</span>{" "}
                <span className="temp-night">9°</span>
              </li>
              <li>Cloudy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
