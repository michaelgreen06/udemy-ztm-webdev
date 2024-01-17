import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageSrc, dotPos }) => {
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
          id="topLeft"
          className="dot"
          style={{ top: `${dotPos.topY}px`, left: `${dotPos.leftX}px` }}
        ></div>
        <div
          id="topRight"
          className="dot"
          style={{ top: `${dotPos.topY}px`, left: `${dotPos.rightX}px` }}
        ></div>
        <div
          id="bottomLeft"
          className="dot"
          style={{ top: `${dotPos.bottomY}px`, left: `${dotPos.leftX}px` }}
        ></div>
        <div
          id="bottomRight"
          className="dot"
          style={{ top: `${dotPos.bottomY}px`, left: `${dotPos.rightX}px` }}
        ></div>
      </div>
      <div className="bounding-box"></div>
    </div>
  );
};

export default FaceRecognition;
