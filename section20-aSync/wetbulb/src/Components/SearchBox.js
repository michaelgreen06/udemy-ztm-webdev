//new code from Akash example

import React, { useRef, useState } from "react";
import { StandaloneSearchBox, useJsApiLoader } from "@react-google-maps/api";
const libraries = ["places"];
const SearchBox = ({ onLocationSelect }) => {
  const inputRef = useRef();
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_G_PLACES_API_KEY,
    libraries,
  });

  const handlePlaceChanged = () => {
    const [place] = inputRef.current.getPlaces();
    if (place) {
      const lng = place.geometry.location.lng();
      const lat = place.geometry.location.lat();
      console.log("Longitude= ", lng);
      console.log("Latitude= ", lat);
      onLocationSelect(lat, lng);
    }
  };

  return (
    isLoaded && (
      <StandaloneSearchBox
        onLoad={(ref) => (inputRef.current = ref)}
        onPlacesChanged={handlePlaceChanged}
      >
        <input
          type="text"
          className="form-control"
          placeholder="Enter Location"
        />
      </StandaloneSearchBox>
    )
  );
};

export default SearchBox;

//12/12/23 get app to take latitude1 & longitude1 to update the weather information

//Resources
//@react-google-maps/api docs: https://web.archive.org/web/20230701010714mp_/https://react-google-maps-api-docs.netlify.app/#useloadscript
//@react-google-maps/api docs on github: https://github.com/JustFly1984/react-google-maps-api/tree/masterç
//google places api library: https://developers.google.com/maps/documentation/javascript/places#place_details
//google places api docs: https://developers.google.com/maps/documentation/places/web-service/overview
//helpful example: https://www.ultimateakash.com/blog-details/Ii0zJGAKYAo=/How-To-Integrate-Google-Places-Autocomplete-in-React-2022

//I might just be lazy and use the code chatGPT suggested so I can move on w/ this project. I am not trying to learn
//everything in depth all at once. I want to keep learning other things as well. I have the searchbox showing up in my app
//but I have to figure out how to get the lat & lng from it and how to use that to calculate the WBT for a location
//What does the flow look like? The app tries to use my location to determine the temperature. If I don't allow it to use
//my location it goes to an error screen. that error screen should have the ability to search for location so I will add the search box
//there. I will also add it to the main page that shows if the user allows location but may want to check another location
//When the search box state changes, by a user selecting a place, then there will be a useEffect that runs to fetch the weather
//data for that location which will determine the WBT. How do I get the lat & long from the autocomplete selection?

//code from chatGPT using autocomplete component

// import React, { useState } from "react";
// import { useLoadScript, Autocomplete } from "@react-google-maps/api";

// function SearchBox({ onLocationSelect }) {
//   const [query, setQuery] = useState("");
//   // const [address, setAddress] = useState("");
//   // const [location, setLocation] = useState({ lat: null, lng: null });
//   const placesAPIKey = process.env.REACT_APP_G_PLACES_API_KEY;

//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: placesAPIKey,
//     libraries: ["places"],
//   });

//   const handleInput = (e) => {
//     setQuery(e.target.value);
//   };

//   const handleSelect = (place) => {
//     // setAddress(place.name);
//     const lat = place.geometry.location.lat();
//     const lng = place.geometry.location.lng();
//     console.log("lat: ", lat, "lng: ", lng);
//     // setLocation({ lat, lng });
//     onLocationSelect(lat, lng);
//   };

//   if (!isLoaded) return <div>Loading...</div>;

//   return (
//     <div>
//       <Autocomplete onSelect={(place) => handleSelect(place)}>
//         {/* chatGPT said the prop for autocomplete should actually be onPlaceChanged but when I change it I get errors */}
//         <input
//           type="text"
//           placeholder="Search for a location"
//           value={query}
//           onChange={handleInput}
//         />
//       </Autocomplete>
//       <div>
//         {/* {address && (
//           <div>
//             <p>Selected Address: {address}</p>
//             <p>Latitude: {location.lat}</p>
//             <p>Longitude: {location.lng}</p>
//           </div>
//         )} */}
//       </div>
//     </div>
//   );
// }

// export default SearchBox;
