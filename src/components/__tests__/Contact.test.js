import { render, screen } from "@testing-library/react"
import ContactUs from "../ContactUs"
import "@testing-library/jest-dom";

test("Should load contact us component", () => {
  render(<ContactUs />);
  const heading = screen.getByRole("heading");  
  const button = screen.getByText("Submit");
  const name = screen.getByPlaceholderText("name");
  
  expect(heading).toBeInTheDocument();
  expect(button).toBeInTheDocument();
  expect(name).toBeInTheDocument();
});

test("Should load 2 input boxes on the contact component", () => {
    render(<ContactUs />)
    const inputBoxes = screen.getAllByRole("textbox");
    console.log(inputBoxes[0]);
    expect(inputBoxes.length).toBe(2)
});