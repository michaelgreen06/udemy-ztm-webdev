//code from chatGPT

import React, { useState } from "react";
import { useLoadScript, StandaloneSearchBox } from "@react-google-maps/api";

const libraries = ["places"];

function App() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "YOUR_API_KEY", // Replace with your API key
    libraries,
  });

  const handleInput = (e) => {
    setQuery(e.target.value);
  };

  const onPlacesChanged = (searchBox) => {
    const places = searchBox.getPlaces();
    setSuggestions(places.map((place) => place.name));
  };

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div>
      <StandaloneSearchBox
        onPlacesChanged={() => onPlacesChanged(this.searchBox)}
        onLoad={(ref) => (this.searchBox = ref)}
      >
        <input
          type="text"
          placeholder="Search for a location"
          value={query}
          onChange={handleInput}
        />
      </StandaloneSearchBox>
      <ul>
        {suggestions.map((suggestion, index) => (
          <li key={index}>{suggestion}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
