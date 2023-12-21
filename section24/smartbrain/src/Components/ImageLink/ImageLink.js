import React from "react";
import "./ImageLink.css";

const ImageLink = ({ handleInput, handleClick }) => {
  return (
    <div>
      <p className="f3">
        This magic brain will detect & identify faces in your images! Give it a try
      </p>
      <div className="center ">
        <div className="pa4 br3 shadow-5 searchback form center">
          <input
            className="f4 pa2 w-70 center"
            type="text"
            onChange={handleInput}
          />
          <button
            className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
            onClick={handleClick}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLink;
