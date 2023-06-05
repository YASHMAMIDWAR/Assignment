import { EmpEdit } from "../EmpEdit";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

describe("Employee Edit", () => {
  test("renders correctly", () => {
    render(
      <BrowserRouter>
        <EmpEdit />
      </BrowserRouter>
    );
    const Heading = screen.getByRole("heading", {
      level: 2,
    });
    expect(Heading).toBeInTheDocument();
    expect(screen.getByText("ID")).toBeInTheDocument();
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Email")).toBeInTheDocument();
    expect(screen.getByText("Phone")).toBeInTheDocument();
    expect(screen.getByText("Is Active")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
