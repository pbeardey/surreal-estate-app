import React, { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "../components/NavBar";

describe("Navbar renders", () => {
  it("renders NavBar", () => {
    const { asFragment } = render(
      <Router>
        <NavBar />
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders logo", () => {
    render(
      <Router>
        <NavBar />
      </Router>
    );
    const logo = screen.getByRole("img");

    expect(logo).toBeInTheDocument();
  });

  it("renders 2 options", () => {
    render(
      <Router>
        <NavBar />
      </Router>
    );
    const listItems = screen.getAllByRole("listitem");

    expect(listItems).toHaveLength(2);
  });
});
