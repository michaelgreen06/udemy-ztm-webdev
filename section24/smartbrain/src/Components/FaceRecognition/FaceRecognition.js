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
      </div>
      <div className="bounding-box"></div>
    </div>
  );
};

export default FaceRecognition;
