import React from "react";

const FaceRecognition = ({ imageSrc }) => {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img
          src={imageSrc}
          alt="Girl in a jacket"
          width="500px"
          height="autoa"
        />
      </div>
    </div>
  );
};

export default FaceRecognition;
