import React from "react";
import "./Stacks.css";

const Stacks = ({ stack }) => {
  return (
    <div className="dev-stack">
      <small>{stack}</small>
    </div>
  );
};

export default Stacks;
