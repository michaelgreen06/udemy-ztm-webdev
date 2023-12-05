//code from chatGPT using autocomplete component

import React, { useState } from "react";
import { useLoadScript, Autocomplete } from "@react-google-maps/api";

function SearchBox() {
  const [query, setQuery] = useState("");
  const [address, setAddress] = useState("");
  const [location, setLocation] = useState({ lat: null, lng: null });
  const placesAPIKey = process.env.REACT_APP_G_PLACES_API_KEY;

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: placesAPIKey,
    libraries: ["places"],
  });

  const handleInput = (e) => {
    setQuery(e.target.value);
  };

  const handleSelect = (place) => {
    setAddress(place.name);
    const lat = place.geometry.location.lat();
    const lng = place.geometry.location.lng();
    setLocation({ lat, lng });
  };

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div>
      <Autocomplete onSelect={(place) => handleSelect(place)}>
        <input
          type="text"
          placeholder="Search for a location"
          value={query}
          onChange={handleInput}
        />
      </Autocomplete>
      <div>
        {address && (
          <div>
            <p>Selected Address: {address}</p>
            <p>Latitude: {location.lat}</p>
            <p>Longitude: {location.lng}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchBox;

//12/5/23 look into using the built in AutoComplete component instead of using this approacth

//Resources
//@react-google-maps/api docs: https://web.archive.org/web/20230701010714mp_/https://react-google-maps-api-docs.netlify.app/#useloadscript
//@react-google-maps/api docs on github: https://github.com/JustFly1984/react-google-maps-api/tree/master
//google places api library: https://developers.google.com/maps/documentation/javascript/places#place_details
//google places api docs: https://developers.google.com/maps/documentation/places/web-service/overview
