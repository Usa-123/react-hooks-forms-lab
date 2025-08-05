import '@testing-library/jest-dom';

import { render, screen } from "@testing-library/react";
import Filter from "../components/Filter"; // ✅ ensure this path is correct


test("renders Filter component", () => {
  render(<Filter search="" onSearchChange={() => {}} />);
  expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
});
