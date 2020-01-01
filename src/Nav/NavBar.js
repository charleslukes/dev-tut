import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SigIn } from "../Sign/SignIn";
import "./NavBar.css";

const NavBar = () => {
  // to dislay the modal
  const [modalShow, setModalShow] = useState(false);

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
          <Link to="/stories" style={{ textDecoration: "none", color: "#000" }}>
            Stories
          </Link>
        </li>
        <li>
          <Link to="/devs" style={{ textDecoration: "none", color: "#000" }}>
            Meet a dev
          </Link>
        </li>
        <li className="search-list">
          <input
            className="search-input"
            type="text"
            placeholder="search for articles"
          />
          <i className="fas fa-search"></i>
        </li>
        <li>
          <i className="far fa-user" onClick={() => setModalShow(true)}></i>
          <SigIn show={modalShow} onHide={() => setModalShow(false)} />
        </li>
      </ul>
    </>
  );
};

export default NavBar;
