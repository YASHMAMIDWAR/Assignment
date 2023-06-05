import { EmpListing } from "../EmpListing";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

describe("Employee Listing", () => {
  test("renders correctly", () => {
    render(
      <BrowserRouter>
        <EmpListing />
      </BrowserRouter>
    );
    const Heading = screen.getByRole("heading", {
      level: 2,
    });
    expect(Heading).toBeInTheDocument();
    expect(screen.getByText("ID")).toBeInTheDocument();
    expect(screen.getByRole("link")).toBeInTheDocument();
    expect(screen.getByRole("table")).toBeInTheDocument();
  });
});
