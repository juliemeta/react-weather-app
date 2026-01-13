import React from "react";

export default function Temperature(props) {
  return (
    <div className="Temperature">
      <span className="temperature-value">
        {Math.round(props.celsius)}
        <span className="temperature-unit align-top">°C</span>
      </span>
    </div>
  );
}
