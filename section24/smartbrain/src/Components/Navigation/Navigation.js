import React from "react";

//note to update things so I can get a green square 😂

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
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
  } else {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <p
          onClick={() => onRouteChange("signin")}
          className="f3 link dim black pa3 underline pointer"
        >
          sign in
        </p>
        <p
          onClick={() => onRouteChange("register")}
          className="f3 link dim black pa3 underline pointer"
        >
          register
        </p>
      </nav>
    );
  }
};

export default Navigation;
