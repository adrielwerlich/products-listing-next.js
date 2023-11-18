import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { CartContext } from '../../context/CartContext';
import { CartList, CartCounter } from '../CartList/CartList';
import '@testing-library/jest-dom';

describe('CartList', () => {
  it('renders without crashing', () => {
    const mockSetIsCartOpen = jest.fn();
    const { container } = render(
      <CartContext.Provider
        value={{
          cartItems: [],
          formattedCartTotal: '0.00',
          addToCart: jest.fn(),
          removeFromCart: jest.fn(),
          reduceQuantity: jest.fn(),
          cartItemCount: 0,
        }}
      >
        <CartList setIsCartOpen={mockSetIsCartOpen} />
      </CartContext.Provider>
    );
    expect(container).toBeInTheDocument();
  });

  it('closes the cart when the close button is clicked', () => {
    const mockSetIsCartOpen = jest.fn();
    const { getByText } = render(
      <CartContext.Provider
        value={{
          cartItems: [],
          formattedCartTotal: '0.00',
          addToCart: jest.fn(),
          removeFromCart: jest.fn(),
          reduceQuantity: jest.fn(),
          cartItemCount: 0,
        }}
      >
        <CartList setIsCartOpen={mockSetIsCartOpen} />
      </CartContext.Provider>
    );
    fireEvent.click(getByText('x'));
    expect(mockSetIsCartOpen).toHaveBeenCalledWith(false);
  });
});

describe('CartCounter', () => {
  it('displays the correct cart item count', () => {
    const { getByText } = render(
      <CartContext.Provider
        value={{
          cartItems: [],
          addToCart: jest.fn(),
          removeFromCart: jest.fn(),
          reduceQuantity: jest.fn(),
          formattedCartTotal: '0.00',
          cartItemCount: 5,
        }}
      >
        <CartCounter />
      </CartContext.Provider>
    );
    expect(getByText('5')).toBeInTheDocument();
  });
});



jest.mock("../../context/CartContext", () => ({
  ...jest.requireActual("../../context/CartContext"),
  // Mock the context values for testing
  useCartContext: () => ({
    cartItems: [
      { product: { id: 1, name: "Product 1", price: 10 }, quantity: 2 },
      { product: { id: 2, name: "Product 2", price: 20 }, quantity: 1 },
    ],
    formattedCartTotal: "$50.00",
    cartItemCount: 3,
  }),
}));

test("renders CartList component", () => {
  render(<CartList setIsCartOpen={() => { }} />);

  // You can add more specific assertions based on your UI
  expect(screen.getByText("Carrinho de compras")).toBeInTheDocument();
  expect(screen.getByText("Product 1")).toBeInTheDocument();
  expect(screen.getByText("Product 2")).toBeInTheDocument();
  expect(screen.getByText("Total:")).toBeInTheDocument();
  expect(screen.getByText("$50.00")).toBeInTheDocument();
  expect(screen.getByText("Finalizar compra")).toBeInTheDocument();
});

test("renders CartCounter component", () => {
  render(<CartCounter />);

  expect(screen.getByText("3")).toBeInTheDocument();
});
