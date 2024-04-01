// Test: converts days to hours correctly
import { render, screen } from '@testing-library/react';
// eslint-disable-next-line no-unused-vars
import React from 'react';
import App from './App';

test('converts days to hours correctly', () => {
  render(<App />);
  const result = screen.getByText(/day\(s\) is equal to/i);
  expect(result).toHaveTextContent('0 day(s) is equal to 0 hour(s)');
});