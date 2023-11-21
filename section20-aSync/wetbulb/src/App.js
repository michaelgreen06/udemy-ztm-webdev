import { useState } from "react";

function App() {
  const [location, setLocation] = useState({});

  function locate() {
    navigator.geolocation.getCurrentPosition(success, error);
  }

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(`Your latitude is:${latitude}. Your longitude is:${longitude}`);
  }

  function error() {
    console.log("Geolocation is not enabled");
  }

  locate();

  return <div></div>;
}

export default App;

//I need to find the formula that I will use to calculate the wet bulb temp. I need to know the users location
//I need to feed the user's location into the openweather.org api to get the info that goes into the equation
//looks like i run navigator.geolocation to find the users position. YES! I actually was able to use the API to find
//my location successfully. Now I have my location. I easily get it by running navigator.geolocation etc
//the geolocation method(?) returns an object that contains the lat & long which I then need to plug into the
//open weather api to determine the current conditions. One quesiton is: when do I want to get the user's location?
//Another is: do I need to use promises here for this aSync operation of getting the user's location?
