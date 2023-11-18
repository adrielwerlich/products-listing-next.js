import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CartList from './CartList';

describe('CartList', () => {
  test('renders CartList component', () => {
    render(<CartList setIsCartOpen={jest.fn()} />);

    // Assert that the CartList component is rendered
    expect(screen.getByTestId('cart-list')).toBeInTheDocument();
  });

  test('calls setIsCartOpen when close button is clicked', () => {
    const setIsCartOpen = jest.fn();
    render(<CartList setIsCartOpen={setIsCartOpen} />);

    // Simulate a click on the close button
    fireEvent.click(screen.getByTestId('close-button'));

    // Assert that setIsCartOpen is called with the correct value
    expect(setIsCartOpen).toHaveBeenCalledWith(false);
  });
});