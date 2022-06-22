import axios from "axios";
import React, { useEffect, useState } from "react";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";
import "../styles/Properties.css";

const Properties = () => {
  const API_URL = "http://localhost:3000/api/v1/PropertyListing/";
  const [properties, setProperties] = useState([]);
  const [alert, setAlert] = useState("");

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        setProperties(response.data);
        setAlert("");
      })
      .catch((err) => {
        const { status } = err.response;
        if (status === 404) {
          setAlert("Properties not found");
        }
        if (status === 500) {
          setAlert("Server Error...Please try again later.");
        }
      });
  }, []);

  return (
    <div className="properties-container">
      <Alert message={alert} />
      {properties.map((property) => (
        <PropertyCard key={property._id} propertyData={property} />
      ))}
    </div>
  );
};

export default Properties;
