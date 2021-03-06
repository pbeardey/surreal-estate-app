import React, { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import qs from "qs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSortUp,
  faSortDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/SideBar.css";

const SideBar = () => {
  const [searchText, setSearchText] = useState("");
  const history = useHistory();
  const { search } = useLocation();

  const buildAQueryString = (operation, valueObj) => {
    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });

    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify({
        ...JSON.parse(currentQueryParams[operation] || "{}"),
        ...valueObj,
      }),
    };

    return qs.stringify(newQueryParams, {
      addQueryPrefix: true,
      encode: false,
    });
  };

  const handleTextChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const newQueryString = buildAQueryString("query", {
      title: { $regex: searchText },
    });
    history.push(newQueryString);
  };

  return (
    <div className="side-bar">
      <form className="side-bar__search-form" onSubmit={handleSearch}>
        <input
          type="text"
          value={searchText}
          onChange={handleTextChange}
          placeholder="Swinton"
        />
        <button type="submit">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
      <ul>
        <li>
          <Link className="side-bar__filter" to="/">
            Clear All
          </Link>
        </li>
        <li>
          <Link
            className="side-bar__filter"
            to={buildAQueryString("query", { city: "Manchester" })}
          >
            Manchester
          </Link>
        </li>
        <li>
          <Link
            className="side-bar__filter"
            to={buildAQueryString("query", { city: "Leeds" })}
          >
            Leeds
          </Link>
        </li>
        <li>
          <Link
            className="side-bar__filter"
            to={buildAQueryString("query", { city: "Liverpool" })}
          >
            Liverpool
          </Link>
        </li>
        <li>
          <Link
            className="side-bar__filter"
            to={buildAQueryString("query", { city: "Sheffield" })}
          >
            Sheffield
          </Link>
        </li>
      </ul>
      Sort:
      <ul>
        <li>
          <Link to={buildAQueryString("sort", { price: 1 })}>
            Price Ascending
            <FontAwesomeIcon icon={faSortUp} />
          </Link>
          <br />
          <Link to={buildAQueryString("sort", { price: -1 })}>
            Price Descending
            <FontAwesomeIcon icon={faSortDown} />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
