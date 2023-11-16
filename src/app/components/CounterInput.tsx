import React, { useState, useContext } from "react";
import styled from "styled-components";
import { CartContext } from "../context/CartContext";
import Pipe from "../assets/images/Pipe";
import { Product } from "../types/product";

export const CounterInput = ({ product }: { product: Product }) => {
  const [value, setValue] = useState(1);

  const { cartItems, addToCart, reduceQuantity, removeFromCart } = useContext(CartContext);

  const handleIncrease = () => {
    setValue(value + 1);
    addToCart(product);
  };

  const handleDecrease = () => {
    if (value > 1) {
      setValue(value - 1);
      reduceQuantity(product);
    }
  };

  return (
    <Container className="flex flex-col gap-1 mx-1">
      <QuantityText>Qtd:</QuantityText>
      <CounterInputContainer>
        <Button onClick={handleDecrease}>
          <SignalStyle>-</SignalStyle>
        </Button>
        <Pipe />
        <Input type="text" disabled value={value} />
        <Pipe style={{ width: "6px", height: "18px" }} />
        <Button onClick={handleIncrease}>
          <SignalStyle>+</SignalStyle>
        </Button>
      </CounterInputContainer>
    </Container>
  );
};

const Container = styled.div`
  bottom: 5px;
  position: relative;
`;

const QuantityText = styled.span`
  color: #000;
  font-family: Montserrat;
  font-size: 5px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const SignalStyle = styled.span`
  width: 5px;
  color: #000;
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const CounterInputContainer = styled.div`
  width: 50px;
  height: 19px;
  flex-shrink: 0;
  border-radius: 4px;
  border: 0.3px solid #bfbfbf;
  background: #fff;
  display: flex;
`;

const Button = styled.button`
  width: 19px;
  height: 19px;
  border: none;
  background: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  justify-content: center;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  text-align: center;
  width: 5px;
  color: #000;
  font-family: Montserrat;
  font-size: 8px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
