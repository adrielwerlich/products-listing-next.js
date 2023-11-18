import React, { useContext } from "react";
import Image from "next/image";

import { CartContext } from "../../context/CartContext";
import { CounterInput } from "../CounterInput/CounterInput";
import CloseIcon from "../../assets/icons/CloseIcon";
import { CartItemType } from "../../context/CartContext";

import {
  Close,
  CloseButton,
  ImageContainer,
  CartItemContainer,
  ProductName,
  PriceTag,
  FlexRow,
  ProductInfoContainer
} from "./CartItem.styles";

interface Props {
  item: CartItemType;
}

const CartItem: React.FC<Props> = ({ item }) => {
  const formattedPrice = item.product?.price?.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  console.log(item, "cart item");


  const { removeFromCart } = useContext(CartContext);

  return (
    <>
      <CloseButton onClick={() => removeFromCart(item.product)}>
        <CloseIcon size={18} />
        <Close>x</Close>
      </CloseButton>
      <CartItemContainer>
        <ImageContainer>
          <Image
            src={item.product.photo}
            alt={item.product.name}
            width={100}
            height={100}
            objectFit="cover"
          />
        </ImageContainer>
        <div>
          <ProductInfoContainer>
            <FlexRow>
              <ProductName>{item.product.name}</ProductName>
              <CounterInput item={item} />
              <PriceTag>R${formattedPrice}</PriceTag>
            </FlexRow>
          </ProductInfoContainer>
        </div>
      </CartItemContainer>
    </>
  );
};

export default CartItem;
