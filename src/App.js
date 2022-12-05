import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Dnipro" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://comfy-marshmallow-bb80b1.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Olga Petrunenko
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/HelgaDp/Week4"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
