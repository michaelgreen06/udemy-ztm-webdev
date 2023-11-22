import { useEffect, useState } from "react";

function App() {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  useEffect(
    function fetchWeather() {
      if (latitude !== "" && longitude !== "") {
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=dfd00a0b3921425262c44a3a2c7508ad`
        )
          .then((resp) => resp.json())
          .then((data) => {
            console.log(data);
          })
          .catch((error) => console.error(error));
      }
      fetchWeather();
    },
    [longitude, latitude]
  );

  function locate() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => resolve(position),
        (error) => reject(error)
      );
    });
  }

  useEffect(() => {
    locate()
      .then((position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      })
      .catch((error) => console.error("failed to get location: ", error));
  });

  return (
    <div>
      <h1>your latitude is: {latitude}</h1>
      <h1>your longitude is: {longitude}</h1>
    </div>
  );
}

export default App;

//11/23/23 Create a solid plan of what I want to happen before I start trying to code it up
