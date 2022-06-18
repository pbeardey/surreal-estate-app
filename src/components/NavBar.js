/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";

const NavBar = () => {
  const LOGO_URL =
    "https://mcrcodes.s3.eu-west-2.amazonaws.com/course/surreal-estate/logo.png";

  return (
    <div className="navbar-container">
      <img className="navbar-logo" src={LOGO_URL} alt="logo" />
      <ul className="navbar-links">
        <li className="navbar-links-item">
          <Link className="item" to="/">
            View Properties
          </Link>
        </li>
        <li className="navbar-links-item">
          <Link className="item" to="/add-property">
            Add a Property
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
