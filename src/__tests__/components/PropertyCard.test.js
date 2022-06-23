import React, { render, screen } from "@testing-library/react";
import PropertyCard from "../../components/PropertyCard";

describe("PropertyCard renders correctly", () => {
  const validProps = {
    _id: "abc123",
    title: "2 bedroom period property",
    type: "Flat",
    bedrooms: 3,
    bathrooms: 2,
    price: 1000,
    city: "Manchester",
    email: "ourHouse@street.com",
  };

  beforeEach(() => render(<PropertyCard propertyData={validProps} />));

  it("renders snapshot", () => {
    const { asFragment } = render(<PropertyCard propertyData={validProps} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders title", () => {
    const title = screen.getByText(/property/i);

    expect(title).toHaveTextContent(validProps.title);
  });

  it("renders type - city", () => {
    const typeAndCity = screen.getByText(/Flat/i);

    expect(typeAndCity).toHaveTextContent(
      `${validProps.type} - ${validProps.city}`
    );
  });

  it("renders bathrooms", () => {
    const numberOfBathrooms = screen.getByText("2");

    expect(numberOfBathrooms).toHaveTextContent("2");
  });

  it("renders bedrooms", () => {
    const numberOfBedrooms = screen.getByText("3");

    expect(numberOfBedrooms).toHaveTextContent("3");
  });

  it("renders email link", () => {
    const emailLink = screen.getByRole("link", { name: /email/i });

    expect(emailLink).toHaveAttribute("href", validProps.email);
  });
});
