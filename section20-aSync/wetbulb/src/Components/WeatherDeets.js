import React from "react";

const WeatherDeets = ({ weather }) => {
  const t = (weather.main.temp - 273.15).toFixed(2);
  const rh = weather.main.humidity;
  return (
    <div>
      <h2>The temperature is: {t}&deg;C</h2>
      <h2>The relative humidity is: {rh}%</h2>
    </div>
  );
};

export default WeatherDeets;
