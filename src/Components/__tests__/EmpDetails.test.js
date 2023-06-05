import { EmpDetails } from "../EmpDetails";
import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

describe("Employee Details", () => {
  test("Employee Details Renders Correctly", () => {
    render(
      <BrowserRouter>
        <EmpDetails />
      </BrowserRouter>
    );
    const pageHeading = screen.getByRole("heading", {
      level: 3,
    });
    expect(pageHeading).toBeInTheDocument();

    expect(screen.getByText("Email:")).toBeInTheDocument();
    expect(screen.getByText("Phone:")).toBeInTheDocument();
  });
});
