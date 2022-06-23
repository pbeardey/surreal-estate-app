import React, { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import SideBar from "../../components/SideBar";

describe("Sidebar renders", () => {
  it("renders SideBar", () => {
    const { asFragment } = render(
      <Router>
        <SideBar />
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders 5 options", () => {
    render(
      <Router>
        <SideBar />
      </Router>
    );
    const listItems = screen.getAllByRole("listitem");

    expect(listItems).toHaveLength(5);
  });
});
