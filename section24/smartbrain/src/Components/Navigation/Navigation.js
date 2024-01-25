import React from "react";

const Navigation = ({ onRouteChange }) => {
  return (
    <nav style={{ display: "flex", justifyContent: "flex-end" }}>
      <p
        onClick={() => onRouteChange("signin")}
        className="f3 link dim black pa3 underline pointer"
      >
        sign out
      </p>
    </nav>
  );
};

export default Navigation;
