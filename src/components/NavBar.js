/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../styles/NavBar.css";

const NavBar = () => {
  const LOGO_URL =
    "https://mcrcodes.s3.eu-west-2.amazonaws.com/course/surreal-estate/logo.png";

  return (
    <div className="navbar-container">
      <img className="navbar-logo" src={LOGO_URL} alt="logo" />
      <ul className="navbar-links">
        <li className="navbar-links-item">
          <a href="">View Properties</a>
        </li>
        <li className="navbar-links-item">
          <a href="">Add a Property</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
