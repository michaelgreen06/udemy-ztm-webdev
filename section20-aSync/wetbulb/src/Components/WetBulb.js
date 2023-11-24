import React from "react";

const WetBulb = ({ weather }) => {
  function atan(num) {
    return Math.atan(num);
  }
  function sqrt(num) {
    return Math.sqrt(num);
  }
  const t = weather.main.temp - 273.15;
  const rh = weather.main.humidity;

  const wbt = (t, rh) => {
    return (
      t * atan(0.151977 * sqrt(rh + 8.313659)) +
      (0.00391838 * sqrt(rh ** 3) * atan(0.023101 * rh) -
        atan(rh - 1.676331) +
        atan(t + rh) -
        4.686035)
    ).toFixed(2);
  };

  return (
    <div>
      <h2>The wet bulb temperature is: {wbt(t, rh)}&deg;C</h2>
    </div>
  );
};

export default WetBulb;
