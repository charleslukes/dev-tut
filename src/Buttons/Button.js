import React from "react";
import "./Button.css";

const Button = ({ name, parentClass, type = "text", handleClick }) => {
  return (
    <>
      <button
        className={`default-btn ${parentClass}`}
        type={type}
        onClick={handleClick}
      >
        {name}
      </button>
    </>
  );
};

export default Button;
