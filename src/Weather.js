import React from "react";
import "./App.css";

export default function Weather() {
  let weatherData = {
    city: "New York",
    date: "Tueday 10:00",
    description: "Sunny",
    temperature: 19,
  };

  return (
    <div className="Weather">
      <div>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>Last updated: {weatherData.date}</li>
          <li>{weatherData.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div>
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="icon"
            />
          </div>
          <div>
            <p>
              {weatherData.temperature}{" "}
              <span className="units">
                <a href="#">ºC</a> |<a href="#">ºF</a>
              </span>
            </p>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: 80%</li>
            <li>Wind: 10 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
