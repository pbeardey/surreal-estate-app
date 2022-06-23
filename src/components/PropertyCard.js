/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faBed, faBath } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import "../styles/PropertyCard.css";

const PropertyCard = ({ propertyData }) => {
  const { bathrooms, bedrooms, email, city, price, title, type } = propertyData;
  const LOGO_URL =
    "https://mcrcodes.s3.eu-west-2.amazonaws.com/course/surreal-estate/logo.png";

  return (
    <div className="property-card-container">
      <img className="property-card-logo" src={LOGO_URL} alt="logo" />
      <div className="property-card-image" />
      <div className="property-card-title">{title}</div>
      <div className="property-card-type">
        {type} - {city}
      </div>
      <div className="property-card-bathrooms">
        <FontAwesomeIcon icon={faBath} /> {bathrooms}
      </div>
      <div className="property-card-bedrooms">
        <FontAwesomeIcon icon={faBed} /> {bedrooms}
      </div>
      <div className="property-card-price">£{price}</div>
      <div className="property-card-emaillink">
        <a href={email}>
          <FontAwesomeIcon icon={faEnvelope} />
          Email
        </a>
      </div>
    </div>
  );
};

PropertyCard.propTypes = {
  propertyData: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    bathrooms: PropTypes.number,
    bedrooms: PropTypes.number,
    email: PropTypes.string,
    city: PropTypes.string,
    price: PropTypes.number,
    title: PropTypes.string,
    type: PropTypes.string,
  }).isRequired,
};

export default PropertyCard;
