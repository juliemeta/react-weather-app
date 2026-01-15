import React from "react";

export default function ForecastDays(props) {
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return weekdays[day];
  }

  function icon() {
    let icon = props.data.condition.icon;
    let iconUrl = `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${icon}.png`;
    return `${iconUrl}`;
  }

  function tempDay() {
    let temperatureDay = Math.round(props.data.temperature.maximum);
    return `${temperatureDay}°`;
  }

  function tempNight() {
    let temperatureNight = Math.round(props.data.temperature.minimum);
    return `${temperatureNight}°`;
  }

  return (
    <div className="forecast-days">
      <ul>
        <li className="weekday">{day()}</li>
        <li className="forecast-icons">
          <img src={icon()} alt={props.data.condition.description} />
        </li>
        <li>
          <span className="temp-day">{tempDay()}</span>{" "}
          <span className="temp-night">{tempNight()}</span>
        </li>
      </ul>
    </div>
  );
}
