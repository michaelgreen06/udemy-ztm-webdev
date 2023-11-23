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
//I get the user's location from the geolocation web api, I then feed the lat & lon from the api into the openweathermaps
//api to get a json object w/ a bunch of info about that location. I will get the temp & humidity and I will also use
//another of their APIs to transcode the lat & lon into the location name to display to the user. I wonder how many different
//components I should have and what each component should do. To practice building components I could have a location name
//comp, a wet bulb temp component and if I want to get fancy I could have an input field that allows the user to enter their
//location in case the geolocation api doesn't work for one reason or another. I will focus on the location component and the
//wbt component for this MVP and likely build the input field later.
//I don't totally understand why I'm using useEffect 2x. I also am unsure if I'm using state properly. Does it make sense tohave
//the geolocation API only run 1 time when the app is 1st rendered? I want the location to be consistent so I have a few options
//for that. 1 option is to have a refresh my location button. Another is to use a feature of the geolocate api that watches
//the user's position to see if it changes. I kind of want to be able to use this app myself so I want it to be good. I also
//want it to be efficient in terms of resource consumption so having it watching all the time seems like the wrong move.
//I might as well make it right 1st even though it is an MVP. But maybe not! It's going to be more work to include a manual input
//of location. My whole point w/ this exercise is to get used to dealing w/ promises. So I'm going to build the MVP version and
//can make it fancy later if I want to. Am I even dealing w/ promises?! I modified the geolocation API call to be a promise instead
//of using call back functions, so that is a promise. I assume the openweathermap.org api returns a promise but I am not sure
//feels like I just went down a rabitt hole, because I did, but I learned that (re-learned) that fetch always returns a promise
//and also that response.json() also returns a promise. Looks like I only use promise.all when I am handling multiple aSync
//tasks. I am fetching from the geolocation API and am fetching  from the openweathermap.org api so I do have 2 async operations
//happening. The geolocation api operation is now returning a promise so I could technically use promise.all to wait for
//all promises to resolve. I don't know if it makes sense or not. I believe that the geolocation API is going to be fast but it
//could take a very long time to return a response. It probably is best practice to use promise.all if I need to wait for all of
//the promises to settle before doing something w/ the data. I don't think I need to wait for all of the promises to settle because
//I am getting the data from the geolocation API and am then using it in the openweather api. I haven't done much coding but I have
//learned a few things and have done some architecting. I could build the wbt component and the location component.
