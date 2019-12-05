import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <ul className="nav">
        <li className="main-logo">
          <Link to="/" style={{ textDecoration: "none", color: "#000" }}>
            Dev-Tut
          </Link>
        </li>
        <li>
          <Link
            to="/articles"
            style={{ textDecoration: "none", color: "#000" }}
          >
            Articles
          </Link>
        </li>
        <li>
          <Link to="/News" style={{ textDecoration: "none", color: "#000" }}>
            News
          </Link>
        </li>
        <li>Stories</li>
        <li>Meet a dev</li>
        <li className="search-list">
          <input
            className="search-input"
            type="text"
            placeholder="search for articles"
          />
          <i className="fas fa-search"></i>
        </li>
        <li>
          <i className="far fa-user"></i>
        </li>
      </ul>
    </>
  );
};

export default NavBar;
