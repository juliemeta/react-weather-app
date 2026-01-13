import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App text-center">
      <div className="container">
        <h1>⛈ Current Weather 🌦</h1>
        <h2>With Forecast</h2>
        <Weather />
      </div>
    </div>
  );
}
