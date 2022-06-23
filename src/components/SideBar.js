import React from "react";
import { Link } from "react-router-dom";
import "../styles/SideBar.css";

const SideBar = () => {
  return (
    <div className="side-bar">
      <ul>
        <li>
          <Link to="/">All</Link>
        </li>
        <li>
          <Link to={`/?query={"city": "Manchester"}`}>Manchester</Link>
        </li>
        <li>
          <Link to={`/?query={"city": "Leeds"}`}>Leeds</Link>
        </li>
        <li>
          <Link to={`/?query={"city": "Liverpool"}`}>Liverpool</Link>
        </li>
        <li>
          <Link to={`/?query={"city": "Sheffield"}`}>Sheffield</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
