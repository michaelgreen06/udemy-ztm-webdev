import React from "react";

const Button = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex justify-center items-center pa3"
    >
      <button className="bg-orange grow">More jokes please!</button>
    </div>
  );
};

export default Button;
