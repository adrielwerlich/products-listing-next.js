import React, { useContext } from "react";
import { Product } from "../types/product";
import Image from "next/image";
import styled from "styled-components";
import BuyIcon from "../assets/icons/BuyIcon";
import { CartContext } from "../context/CartContext";
interface Props {
  product: Product;
}

const ProductCardContainer = styled.div`
  width: 217.562px;
  height: 300px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.14);
`;

const ProductName = styled.h2`
  width: 124px;
  height: 38px;
  flex-shrink: 0;
  color: #2c2c2c;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
`;

const SmallText = styled.p`
  width: 192px;
  height: 45px;
  flex-shrink: 0;
  color: #2c2c2c;
  font-family: Montserrat;
  font-size: 10px;
  font-style: normal;
  font-weight: 300;
  line-height: 12px;
  white-space: unset;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 17px 0;
`;

const PriceTag = styled.span`
  width: 64px;
  height: 26px;
  flex-shrink: 0;
  border-radius: 5px;
  background: #373737;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PriceStyle = styled.span`
  width: 51px;
  height: 18px;
  flex-shrink: 0;
  color: #fff;
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 15px;
  padding: 2px 0;
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const BuyButton = styled.button`
  width: 218px;
  height: 31.907px;
  flex-shrink: 0;
  border-radius: 0px 0px 8px 8px;
  background: #0f52ba;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BuyText = styled.span`
  width: 77px;
  height: 14px;
  flex-shrink: 0;
  color: #fff;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
`;

const ProductInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductCard: React.FC<Props> = ({ product }) => {
  const formattedPrice = product.price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const { cartItems, addToCart } = useContext(CartContext);

  // console.log(cartItems, 'product card');
  
  return (
    <ProductCardContainer>
      <div className="relative h-40 flex justify-center items-center">
        <Image
          src={product.photo}
          alt={product.name}
          width={100}
          height={100}
          objectFit="cover"
        />
      </div>
      <div className="h-24">
        <ProductInfoContainer className="h-28">
          <FlexRow>
            <ProductName>{product.name}</ProductName>
            <PriceTag>
              <PriceStyle>R${formattedPrice}</PriceStyle>
            </PriceTag>
          </FlexRow>
          <SmallText title={product.description}>
            {product.description}
          </SmallText>
        </ProductInfoContainer>
        <BuyButton onClick={() => addToCart(product)}>
          <BuyIcon />
          <BuyText>Comprar</BuyText>
        </BuyButton>
      </div>
    </ProductCardContainer>
  );
};

export default ProductCard;
