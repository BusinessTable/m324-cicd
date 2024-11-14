import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../components/Header'; // Adjust the path to your Header component

describe('Header Component', () => {
  test('Header renders correctly', () => {
    render(<Header />);
    expect(screen.getByText('Einkaufsliste App')).toBeInTheDocument();
  });
});
