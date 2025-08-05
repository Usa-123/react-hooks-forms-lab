// src/__tests__/ItemForm.test.js
import '@testing-library/jest-dom';

import { render, screen } from "@testing-library/react";
import ItemForm from "../components/ItemForm";

test("renders form inputs", () => {
  render(<ItemForm onItemFormSubmit={() => {}} />);

  expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/category/i)).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
});
