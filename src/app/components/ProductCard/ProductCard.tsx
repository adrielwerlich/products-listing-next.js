import React, { useContext } from "react";
import { Product } from "../../types/product";
import Image from "next/image";
import BuyIcon from "../../assets/icons/BuyIcon";
import { CartContext } from "../../context/CartContext";
import {
  ProductCardContainer,
  ProductName,
  SmallText,
  PriceTag,
  PriceStyle,
  FlexRow,
  BuyButton,
  BuyText,
  ProductInfoContainer,
} from "./ProductCard.styles";

interface Props {
  product: Product;
}


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
