// Import các thư viện testing cần thiết
import React from "react";
import { render, screen } from "@testing-library/react";
// Import component App để test
import App from "./App";

// Test case kiểm tra việc render link "learn react"
test("renders learn react link", () => {
  // Render component App
  render(<App />);
  // Tìm element có text "learn react" (không phân biệt hoa thường)
  const linkElement = screen.getByText(/learn react/i);
  // Kiểm tra xem element có tồn tại trong document không
  expect(linkElement).toBeInTheDocument();
});
