import React from "react";
import logo from "./logo.png";
import Tilt from "react-parallax-tilt";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt br2 shadow-2"
        style={{ width: 150, height: 150 }}
      >
        <div className="logo pa3 pv3">
          <img
            alt="SmartBrain Logo"
            src={logo}
          />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
