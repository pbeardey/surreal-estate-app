/* eslint-disable no-console */
import React from "react";
import { Link, useLocation } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import qs from "qs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortUp, faSortDown } from "@fortawesome/free-solid-svg-icons";
import "../styles/SideBar.css";

const SideBar = () => {
  const buildQueryString = (operation, valueObj) => {
    const { search } = useLocation();
    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });
    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify(valueObj),
    };
    return qs.stringify(newQueryParams, {
      addQueryPrefix: true,
      encode: false,
    });
  };

  return (
    <div className="side-bar">
      <ul>
        <li>
          <Link className="side-bar__filter" to="/">
            Clear All
          </Link>
        </li>
        <li>
          <Link
            className="side-bar__filter"
            to={buildQueryString("query", { city: "manchester" })}
          >
            Manchester
          </Link>
        </li>
        <li>
          <Link
            className="side-bar__filter"
            to={buildQueryString("query", { city: "leeds" })}
          >
            Leeds
          </Link>
        </li>
        <li>
          <Link
            className="side-bar__filter"
            to={buildQueryString("query", { city: "liverpool" })}
          >
            Liverpool
          </Link>
        </li>
        <li>
          <Link
            className="side-bar__filter"
            to={buildQueryString("query", { city: "sheeffield" })}
          >
            Sheffield
          </Link>
        </li>
      </ul>
      Sort:
      <ul>
        <li>
          <Link to={buildQueryString("sort", { price: 1 })}>
            Price Ascending
            <FontAwesomeIcon icon={faSortUp} />
          </Link>
          <br />
          <Link to={buildQueryString("sort", { price: -1 })}>
            Price Descending
            <FontAwesomeIcon icon={faSortDown} />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
