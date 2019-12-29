import React from "react";
import "./Button.css";

const Button = ({ name, parentClass }) => {
  return (
    <>
      <button className={`default-btn ${parentClass}`}>{name}</button>
    </>
  );
};

export default Button;
