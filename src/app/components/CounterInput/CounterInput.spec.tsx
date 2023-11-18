import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { CartContext } from "../../context/CartContext";
import { CounterInput } from "./CounterInput";
import { CartItemType } from "../../context/CartContext";

// Mocking the CartContext values
const mockCartContextValues = {
  addToCart: jest.fn(),
  reduceQuantity: jest.fn(),
  cartItems: [],
};

const mockItem: CartItemType = {
  product: {
    id: 1,
    name: "Product 1",
    brand: "Brand 1",
    description: "Description 1",
    photo: "photo-url",
    price: 10,
    createdAt: new Date(),
    updatedAt: new Date(),
    quantity: 2
  },
  quantity: 2,
};

test("renders CounterInput component", () => {
  render(
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
      <CounterInput item={mockItem} />

    </CartContext.Provider>
  );

  expect(screen.getByText("Qtd:")).toBeInTheDocument();
  expect(screen.getByDisplayValue("2")).toBeInTheDocument();
  expect(screen.getByText("-")).toBeInTheDocument();
  expect(screen.getByText("+")).toBeInTheDocument();
});

test("increments quantity when '+' button is clicked", () => {
  render(
    <CartContext.Provider value={{
      cartItems: [],
      addToCart: jest.fn(),
      removeFromCart: jest.fn(),
      reduceQuantity: jest.fn(),
      formattedCartTotal: '0.00',
      cartItemCount: 5,
    }}>
      <CounterInput item={mockItem} />
    </CartContext.Provider>
  );

  const increaseButton = screen.getByText("+");
  fireEvent.click(increaseButton);

  expect(mockCartContextValues.addToCart).toHaveBeenCalledWith(mockItem.product);
});

test("decrements quantity when '-' button is clicked", () => {
  render(
    <CartContext.Provider value={{
      cartItems: [],
      addToCart: jest.fn(),
      removeFromCart: jest.fn(),
      reduceQuantity: jest.fn(),
      formattedCartTotal: '0.00',
      cartItemCount: 5,
    }}>
      <CounterInput item={mockItem} />
    </CartContext.Provider>
  );

  const decreaseButton = screen.getByText("-");
  fireEvent.click(decreaseButton);

  expect(mockCartContextValues.reduceQuantity).toHaveBeenCalledWith(mockItem.product);
});

// Add more test cases as needed
