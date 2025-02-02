import React from "react";
import "./App.css";
import Weather from "./Weather";
import "./Weather.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather  defaultCity ="Lusaka"/>
        <footer>
          <small>
            This project was coded by IZA NALONDWA and is {""}
            <a
              href="https://github.com/Nalondwa/react-weather-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open-source code on GitHub
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
