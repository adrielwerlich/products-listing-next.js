import React, { createContext, useState } from "react";
import { Product } from "../types/product";

type CartItem = {
  product: Product;
  quantity: number;
};

type CartContextType = {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  reduceQuantity: (product: Product) => void;
  cartItemCount: number;
  formattedCartTotal: string;
};

export const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => {},
  cartItemCount: 0,
  formattedCartTotal: "",
  removeFromCart: () => {},
  reduceQuantity: () => {},
});

export const CartProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    const existingCartItem = cartItems.find(
      (item) => item.product.id === product.id
    );

    if (existingCartItem) {
      setCartItems(
        cartItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product: Product) => {
    const existingCartItem = cartItems.find(
      (item) => item.product.id === product.id
    );

    if (existingCartItem) {
      setCartItems(cartItems.filter((item) => item.product.id !== product.id));
    }
  };

  const reduceQuantity = (product: Product) => {
    setCartItems(
      cartItems.map((item) =>
        item.product.id === product.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const cartItemCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  const formattedCartTotal = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(cartTotal);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        cartItemCount,
        removeFromCart,
        reduceQuantity,
        formattedCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
