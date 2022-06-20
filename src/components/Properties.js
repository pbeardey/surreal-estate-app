import React from "react";
import PropertyCard from "./PropertyCard";

const Properties = () => {
  const data = {
    title: "2 bedroom period property",
    type: "Flat",
    bedrooms: 3,
    bathrooms: 2,
    price: 1000,
    city: "Manchester",
    email: "ourHouse@street.com",
  };
  return (
    <div>
      <PropertyCard propertyData={data} />
    </div>
  );
};

export default Properties;
