import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageSrc }) => {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img
          id="inputImage"
          src={imageSrc}
          alt="Girl in a jacket"
          width="500px"
          height="auto"
        />
        <div
          className="dot"
          style={{ top: "105.3px", left: "145.92px" }}
        ></div>
      </div>
      <div className="bounding-box"></div>

      <div></div>
      <div></div>
      <div></div>
      {/* there will be 4 divs here from the for loop */}
    </div>
  );
};

export default FaceRecognition;
