// import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";
import SideBar from "./SideBar";
import getProperties from "../requests/getProperties";
import "../styles/Properties.css";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [alert, setAlert] = useState("");
  const { search } = useLocation();

  useEffect(() => {
    getProperties(setProperties, setAlert, search);
  }, [search]);

  return (
    <div className="properties-container">
      <SideBar />
      <Alert message={alert} />
      {properties.map((property) => (
        <PropertyCard key={property._id} propertyData={property} />
      ))}
    </div>
  );
};

export default Properties;
