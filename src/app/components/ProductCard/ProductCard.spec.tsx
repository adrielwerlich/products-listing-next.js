import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { CartContext } from '../../context/CartContext';
import ProductCard from './ProductCard';
import { Product } from '@/app/types/product';

describe('ProductCard', () => {
  const mockProduct: Product = {
    id: 1,
    name: 'Product 1',
    price: 10,
    photo: 'product1.jpg',
    description: 'This is product 1',
    brand: 'Brand 1',
    createdAt: new Date(),
    updatedAt: new Date(),
    quantity: 1,
  };

  it('renders the product name and price correctly', () => {
    render(
      <CartContext.Provider value={{
        cartItems: [],
        addToCart: jest.fn(),
        removeFromCart: jest.fn(),
        reduceQuantity: jest.fn(),
        formattedCartTotal: '0.00',
        cartItemCount: 5,
      }}>
        <ProductCard product={mockProduct} />
      </CartContext.Provider>
    );

    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.getByText('R$10.00')).toBeInTheDocument();
  });

  it('calls addToCart function when Buy button is clicked', () => {
    render(
      <CartContext.Provider value={{
        cartItems: [],
        addToCart: jest.fn(),
        removeFromCart: jest.fn(),
        reduceQuantity: jest.fn(),
        formattedCartTotal: '0.00',
        cartItemCount: 5,
      }}>
        <ProductCard product={mockProduct} />
      </CartContext.Provider>
    );

    const buyButton = screen.getByText('Comprar');
    fireEvent.click(buyButton);

    expect(jest.fn()).toHaveBeenCalledWith(mockProduct);
  });
});