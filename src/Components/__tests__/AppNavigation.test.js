import App from "../../App";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("full app rendering/navigating", async () => {
  render(<App />);
  const user = userEvent.setup();

  expect(screen.getByText("Employee Listing")).toBeInTheDocument();

  await user.click(screen.getByText("Add New"));
  expect(screen.getByText("Employee Create")).toBeInTheDocument();

  await user.click(screen.getByText("Back"));
  expect(screen.getByText("Employee Listing")).toBeInTheDocument();
});
