import React from "react";
import "./Button.css";

const Button = ({ name }) => {
  return (
    <>
      <button className="btn-view">{name}</button>
    </>
  );
};

export default Button;
