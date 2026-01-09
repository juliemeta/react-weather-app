import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App text-center">
      <div className="container">
        <h1>Weather Search</h1>
        <Weather />
        <footer>
          This app was coded by Julie M. Jeffries and is{" "}
          <a
            href="https://github.com/juliemeta/react-weather-app"
            target="_blank"
          >
            open-sourced on GitHub.
          </a>
        </footer>
      </div>
    </div>
  );
}
