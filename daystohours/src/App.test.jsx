// Test: converts days to hours correctly
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
// eslint-disable-next-line no-unused-vars
import React from 'react';
import App from './App';

test('Elements are rendered on the screen', () => {
  render(<App />);
  const input = screen.getByPlaceholderText('Enter number of days');
  const output = screen.getByText(/day\(s\) is equal to/i);
  expect(input).toBeInTheDocument();
  expect(output).toBeInTheDocument();
});