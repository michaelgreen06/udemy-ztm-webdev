import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import Logo from "./Components/Logo/Logo";
import ImageLink from "./Components/ImageLink/ImageLink";
import Rank from "./Components/Rank/Rank";
import ParticlesBg from "particles-bg";
import { useState } from "react";

const particleSettings = {
  className: "particles",
  color: "#ffffff",
  type: "cobweb",
  bg: true,
};

function App() {
  const [input, setInput] = useState("");
  function handleInput(e) {
    setInput(e.target.value);
    console.log("input", input);
    console.log("target", e.target.value);
  }
  function handleClick() {
    console.log("click");
  }
  return (
    <div className="App">
      <ParticlesBg {...particleSettings} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLink
        handleInput={handleInput}
        handleClick={handleClick}
      />
    </div>
  );
}

///////////////////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, user and app ID, model details, and the URL
// of the image we want as an input. Change these strings to run your own example.
//////////////////////////////////////////////////////////////////////////////////////////////////

// Your PAT (Personal Access Token) can be found in the portal under Authentification
const PAT = "a840456b0c9f405c86062cf401200e21";
// Specify the correct user_id/app_id pairings
// Since you're making inferences outside your app's scope
const USER_ID = "an9sqf1wtiqi";
const APP_ID = "smartBrain";
// Change these to whatever model and image URL you want to use
const MODEL_ID = "face-detection";
const IMAGE_URL = "https://samples.clarifai.com/metro-north.jpg";

///////////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
///////////////////////////////////////////////////////////////////////////////////

const raw = JSON.stringify({
  user_app_id: {
    user_id: USER_ID,
    app_id: APP_ID,
  },
  inputs: [
    {
      data: {
        image: {
          url: IMAGE_URL,
        },
      },
    },
  ],
});

const requestOptions = {
  method: "POST",
  headers: {
    Accept: "application/json",
    Authorization: "Key " + PAT,
  },
  body: raw,
};

// NOTE: MODEL_VERSION_ID is optional, you can also call prediction with the MODEL_ID only
// https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs
// this will default to the latest version_id

fetch(
  "https://api.clarifai.com/v2/models/" + MODEL_ID + "/versions/" + "/outputs",
  requestOptions
)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));

export default App;
