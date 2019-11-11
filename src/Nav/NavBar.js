import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <ul className="nav">
        <li className="main-logo">Dev Tut</li>
        <li>Articles</li>
        <li>News</li>
        <li>Stories</li>
        <li>Meet a dev</li>
        <li>
          <input
            className="search-input"
            type="text"
            placeholder="search for articles"
          />
          <i class="fas fa-search"></i>
        </li>
        <li>
          <i class="far fa-user"></i>
        </li>
      </ul>
    </>
  );
};

export default NavBar;
