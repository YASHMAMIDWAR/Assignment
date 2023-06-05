import { EmpCreate } from "../EmpCreate";
import { screen, render, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

describe("Employee Create", () => {
  test("Employee Create Renders Correctly", () => {
    render(
      <BrowserRouter>
        <EmpCreate />
      </BrowserRouter>
    );
    const pageHeading = screen.getByRole("heading", {
      level: 2,
    });
    expect(pageHeading).toBeInTheDocument();

    expect(screen.getByText("ID")).toBeInTheDocument();
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Email")).toBeInTheDocument();
    expect(screen.getByText("Phone")).toBeInTheDocument();
    expect(screen.getByText("Is Active")).toBeInTheDocument();
  });

  test("Validation Running Correctly", async () => {
    render(
      <BrowserRouter>
        <EmpCreate />
      </BrowserRouter>
    );

    await userEvent.type(
      screen.getByTestId("email-placeHolder"),
      "y@gmail.com"
    );
    await userEvent.type(screen.getByTestId("phone-placeHolder"), "9455072231");

    fireEvent.click(screen.getByTestId("saveButton"));

    expect(screen.getByTestId("errorNameMessage", {})).toBeInTheDocument();
  });
});
