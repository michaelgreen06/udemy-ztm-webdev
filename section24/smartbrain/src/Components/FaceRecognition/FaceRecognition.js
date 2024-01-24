import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageSrc, dotPos }) => {
  return (
    <div className="center ma">
      {imageSrc ? (
        <div className="absolute mt2">
          <img
            id="inputImage"
            src={imageSrc}
            alt="Analyzed Image"
            width="500px"
            height="auto"
          />
          {Object.keys(dotPos).length > 0 && (
            <>
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
            </>
          )}
        </div>
      ) : (
        <p>please input an image URL</p>
      )}
    </div>
  );
};

export default FaceRecognition;
