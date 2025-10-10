import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Movelaria Cris title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Movelaria Cris/i);
  expect(titleElement).toBeInTheDocument();
});
