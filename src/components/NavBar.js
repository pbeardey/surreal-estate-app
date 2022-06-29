import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import FacebookLogin from "react-facebook-login";
import "../styles/NavBar.css";

const NavBar = ({ onLogin, userID, onLogout }) => {
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
        {userID ? (
          <button type="submit" onClick={onLogout}>
            Sign Out
          </button>
        ) : (
          <FacebookLogin
            appId={process.env.REACT_APP_API_KEY}
            autoLoad
            fields="name,email,picture"
            callback={onLogin}
          />
        )}
      </ul>
    </div>
  );
};

NavBar.propTypes = {
  onLogin: PropTypes.func.isRequired,
  userID: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default NavBar;
