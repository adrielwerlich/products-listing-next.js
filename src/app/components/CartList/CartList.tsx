import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CloseIcon from "../../assets/icons/CloseIcon";
import CartItem from "../CartItem/CartItem";

import {
  FinishText,
  GotoCheckoutButton,
  TotalText,
  TextContainer,
  CartFooter,
  CartContainer,
  Title,
  CloseButton,
  Close,
  CartHeader,
  CartProduct,
} from "./CartList.styles";

interface CartListProps {
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CartList = ({ setIsCartOpen }: CartListProps) => {
  const { cartItems, formattedCartTotal } = useContext(CartContext);

  return (
    <div id="cart-list">
      <CartHeader>
        <Title>Carrinho de compras</Title>
        <CloseButton onClick={() => setIsCartOpen(false)}>
          <CloseIcon />
          <Close>x</Close>
        </CloseButton>
      </CartHeader>

      <CartContainer>
        {cartItems.map((item) => (
          <CartItem key={item.product.id} item={item} />
        ))}
      </CartContainer>
      <CartFooter>
        <TextContainer>
          <TotalText>Total:</TotalText>
          <TotalText>{formattedCartTotal}</TotalText>
        </TextContainer>
        <GotoCheckoutButton>
          <FinishText>Finalizar compra</FinishText>
        </GotoCheckoutButton>
      </CartFooter>
    </div>
  );
};

export const CartCounter = () => {
  const { cartItemCount } = useContext(CartContext);

  return <>{cartItemCount}</>;
};
