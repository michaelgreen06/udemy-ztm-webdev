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
    console.log(box);
  }

  // function faceStuff(){
  //  const imageWidth=document.getElementById("inputImage").width;
  //  const imageHeight=document.getElementById("inputImage").height;
  //   return{
  //     leftX:box.left_col*imageWidth,
  //     rightX:box.right_col*imageWidth,
  //     topY:box.top_row*imageHeight,
  //     bottomY:box.bottom_row*imageHeight
  // }

  //what am I wanting to happen here? I think I want to get this to work using my own 4 dots method so that I can learn more deeply
  //faceStuff() returns an object that says where each of the 4 dots will be located. They all are calculated from the same point
  //which is all the way left and either top or bottom of the image. I have the object w/ the relevant info then what do I do with
  //this info? I use CSS in the empty div in the FaceRecognition component. So I would pass in the result of faceStuff() into
  //FaceRecognition somehow. What I pass in depends on how the CSS is formatted. I will have 4 separate dots and they will each
  //have their own positions. GPT recomended using a forEach loop to make each of the positions for these dots. If i call faceStuff()
  //then it will return an object. does that mean I would pass faceStuff into FaceRecognition?! What would I pass it as? yes! I believe
  //I can absolutely pass faceStuff function into FaceRecognititon. When faceStuff() is executed it returns an object that object
  //has coordinates of where each dot goes. in the response values are re-used. the top row is used twice the left col is used 2x
  //etc etc. each dot has an x&y coordinate that needs to be plotted in order to put it at the right spot. the response is giving
  //me values in % but I need to convert them to px in my faceStuff function. I believe my faceStuff function is converting
  //the outputs from the API into px. Now how do I feed them into the CSS so it makes dots at those points?! Would it be w/in the css?
  //w/in the css there will be specific styles for dots. The coordinates will be w/in the js?! I have 4 different <div>s and
  //and they each have a position attribute? No! They have a top & left attribute.
  //where is the forloop going to run?! I want the results of the 4 loop to be returned in the facerecognition component.

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
      <FaceRecognition imageSrc={IMAGE_URL} />
    </div>
  );
}

export default App;
