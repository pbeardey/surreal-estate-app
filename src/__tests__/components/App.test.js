import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import App from "../../components/App";

describe("Surreal Estate App", () => {
  beforeEach(() => {
    render(
      <Router>
        <App />
      </Router>
    );
  });

  test("renders App", () => {
    const linkElement = screen.getByText(/surreal estate/i);
    expect(linkElement).toBeInTheDocument();
  });
});
