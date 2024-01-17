import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import Logo from "./Components/Logo/Logo";
import ImageLink from "./Components/ImageLink/ImageLink";
import Rank from "./Components/Rank/Rank";
import ParticlesBg from "particles-bg";
import { useState } from "react";
import FaceRecognition from "./Components/FaceRecognition/FaceRecognition";

const particleSettings = {
  className: "particles",
  color: "#ffffff",
  type: "cobweb",
  bg: true,
};

function App() {
  const [input, setInput] = useState("");
  const [box, setBox] = useState({});
  // Your PAT (Personal Access Token) can be found in the portal under Authentification
  const PAT = "a840456b0c9f405c86062cf401200e21";
  // Specify the correct user_id/app_id pairings
  // Since you're making inferences outside your app's scope
  const USER_ID = "clarifai";
  const APP_ID = "main";
  // Change these to whatever model and image URL you want to use
  const MODEL_ID = "face-detection";
  const IMAGE_URL = input;

  function handleInput(e) {
    setInput(e.target.value);
  }

  function onButtonSubmit() {
    console.log("click");
    fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/outputs", requestOptions) //only accepts links that end w/ .jpg!
      .then((response) => response.json())
      .then((result) =>
        setBox(result.outputs[0].data.regions[0].region_info.bounding_box)
      )
      .catch((error) => console.log("error", error));
  }

  function faceStuff() {
    const imageWidth = document.getElementById("inputImage").width;
    const imageHeight = document.getElementById("inputImage").height;
    return {
      leftX: box.left_col * imageWidth,
      rightX: box.right_col * imageWidth,
      topY: box.top_row * imageHeight,
      bottomY: box.bottom_row * imageHeight,
    };
  }

  const result = faceStuff();

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

  return (
    <div className="App">
      <ParticlesBg {...particleSettings} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLink
        handleInput={handleInput}
        handleClick={onButtonSubmit}
      />
      <FaceRecognition
        imageSrc={IMAGE_URL}
        dotPos={result}
      />
    </div>
  );
}

export default App;
