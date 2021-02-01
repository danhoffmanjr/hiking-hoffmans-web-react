import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../layout/App";

test("renders learn react link", () => {
  render(<App />);
  const siteName = screen.getByText(/Hiking Hoffmans/i);
  expect(siteName).toBeInTheDocument();
});
