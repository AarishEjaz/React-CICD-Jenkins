
// // src/__tests__/App.test.js
// import { render, screen } from '@testing-library/react';
// import '@testing-library/jest-dom'; // Provides additional matchers for assertions
// import App from '../App';

// test('renders the "Hello World" text', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/hello world/i); // Case-insensitive match
//   expect(linkElement).toBeInTheDocument(); // Assert that the element is in the document
// });

import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

test('renders Vite + React text', () => {
  render(<App />);
  const headerElement = screen.getByText(/Vite \+ React/i);
  expect(headerElement).toBeInTheDocument();
});

test('increments count on button click', () => {
  render(<App />);
  const buttonElement = screen.getByText(/count is 0/i);
  expect(buttonElement).toBeInTheDocument();

  fireEvent.click(buttonElement);
  expect(buttonElement).toHaveTextContent('count is 1');

  fireEvent.click(buttonElement);
  expect(buttonElement).toHaveTextContent('count is 2');
});
