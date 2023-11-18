import React, { useState, useContext, useEffect } from "react";
import { CartContext, CartItemType } from "../../context/CartContext";
import Pipe from "../../assets/images/Pipe";

import {
  Container,
  QuantityText,
  SignalStyle,
  CounterInputContainer,
  Button,
  Input,
} from "./CounterInput.styles";

export const CounterInput = ({ item }: { item: CartItemType }) => {
  const [value, setValue] = useState(item.quantity);

  const { addToCart, reduceQuantity, cartItems } = useContext(CartContext);

  useEffect(() => {
    setValue(item.quantity);
  }, [cartItems]);

  const handleIncrease = () => {
    setValue(value + 1);
    addToCart(item.product);
  };

  const handleDecrease = () => {
    if (value > 1) {
      setValue(value - 1);
      reduceQuantity(item.product);
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
