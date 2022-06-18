import React, { render, screen } from "@testing-library/react";
import NavBar from "../components/NavBar";

describe("Navbar renders", () => {
  it("renders NavBar", () => {
    const { asFragment } = render(<NavBar />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders logo", () => {
    render(<NavBar />);
    const logo = screen.getByRole("img");

    expect(logo).toBeInTheDocument();
  });

  it("renders 2 options", () => {
    render(<NavBar />);
    const listItems = screen.getAllByRole("listitem");

    expect(listItems).toHaveLength(2);
  });
});
