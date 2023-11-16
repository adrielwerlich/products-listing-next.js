import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import styled from "styled-components";
import CloseIcon from "../assets/icons/CloseIcon";
import CartItem from "./CartItem";

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

const FinishText = styled.span`
  color: #fff;
  font-family: Montserrat;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 15px; /* 53.571% */
`;

const GotoCheckoutButton = styled.button`
  width: 486px;
  height: 97px;
  background: #000;
`;

const TotalText = styled.span`
  color: #fff;
  font-family: Montserrat;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 15px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2rem 3rem 0 4rem;
  margin-bottom: 2rem;
`;

const CartFooter = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0;
`;

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 1rem;
  margin: 40px 0 0 48px;
  height: 60vh;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #007aff;
    border-radius: 20px;
  }
`;

const Title = styled.h1`
  width: 180px;
  height: 56px;
  flex-shrink: 0;
  color: #fff;
  font-family: Montserrat;
  font-size: 27px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 36px 0 0 47px;
`;

const CloseButton = styled.button`
  width: 38px;
  height: 38px;
  flex-shrink: 0;
  fill: #000;
  top: 39px;
  position: relative;
  right: 23px;
`;

const Close = styled.span`
  width: 15px;
  height: 20px;
  flex-shrink: 0;
  color: #fff;
  font-family: Montserrat;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 15px;
  position: absolute;
  top: 11px;
  right: 11px;
  z-index: 1;
`;

const CartHeader = styled.div`
  justify-content: space-between;
  display: flex;
`;

const CartProduct = styled.div`
width: 379px;
height: 95px;
flex-shrink: 0;
Copy
border-radius: 8px;
background: #FFF;

box-shadow: -2px 2px 10px 0px rgba(0, 0, 0, 0.05);`;
