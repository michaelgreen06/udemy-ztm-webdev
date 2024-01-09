import React from "react";

const FaceRecognition = ({ imageSrc }) => {
  return (
    <div>
      <img
        className="center"
        src={imageSrc}
        alt="Girl in a jacket"
        width="500"
        height="500"
      />
    </div>
  );
};

export default FaceRecognition;
