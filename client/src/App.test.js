import { render, screen } from "@testing-library/react";
import App from "./App";

test('renders "Learn React" link in the App component', () => {
  render(<App />);

  // Use a more explicit query for the link
  const learnReactLink = screen.getByRole("link", { name: /learn react/i });

  // Assert that the link is in the document
  expect(learnReactLink).toBeInTheDocument();
});
