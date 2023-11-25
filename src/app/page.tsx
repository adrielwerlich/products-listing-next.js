"use client";

import React, { useEffect, useState, Suspense } from "react";
import styled, { keyframes } from "styled-components";
import CartIcon from "./assets/icons/CartIcon";
import { getProducts } from "../app/utils/api";
import { Product } from "../app/types/product";
import ProductListing from "./pages/ProductsListing";
import { CartList, CartCounter } from "./components/CartList/CartList";
import { CartProvider } from "./context/CartContext";
import Footer from "./components/Footer/Footer";
import { useQuery } from 'react-query'

import { dummy } from "./utils/dummy";
interface Props {
  products: Product[];
}

const Page = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const { data, isLoading, error } = useQuery('Products', async () => {
    const response = await fetch(
      'https://mks-fromntend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC',
    )
    return response.json()
    // return []
  })

  return (
    <>
      <CartProvider>
        <nav className="bg-[#0F52BA] py-4 w-full h-[101px] flex-wrap flex justify-between items-center">
          <div className="flex">
            <CustomTitle>MKS</CustomTitle>
            <Subtitle>Sistemas</Subtitle>
          </div>
          <CartButton onClick={() => setIsCartOpen(true)}>
            <CartIcon />
            <CartCounterContainer>
              <CartCounter />
            </CartCounterContainer>
          </CartButton>
        </nav>
        {!isLoading ? (
          <>
            <div className="flex h-full w-full">
              {data?.products?.length > 0 || dummy?.length && <ProductListing products={data?.products ?? dummy} />}
            </div>
            <CartWrapper isopen={isCartOpen}>
              <CartList setIsCartOpen={setIsCartOpen} />
            </CartWrapper>
            <Footer />
          </>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <StyledSpinner />
        )}
      </CartProvider>
    </>
  );
};


const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const StyledSpinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #000;
  border-radius: 50%;
  width: 88px;
  height: 88px;
  animation: ${spin} 1s linear infinite;
  position: absolute;
  top: 50%;
  left: 50%;
`;
const CustomTitle = styled.h1`
  color: #fff;
  font-family: Montserrat;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 19px;
  margin-left: 65px;
  display: flex;
  align-self: center;
`;

const Subtitle = styled.h2`
  color: #fff;
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: 19px;
  margin-left: 15px;
  display: flex;
  align-self: center;
`;

const CartButton = styled.button`
  width: 90px;
  height: 45px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #fff;
  right: 80px;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: space-evenly;
`;

const CartCounterContainer = styled.span`
  color: #000;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const slideIn = keyframes`
from {
  transform: translateX(100%);
}
to {
  transform: translateX(0);
}
`;

const slideOut = keyframes`
from {
  transform: translateX(0%);
}
to {
  transform: translateX(100%);
}
`;

const CartWrapper = styled.div<{ isopen: boolean }>`
  position: fixed;
  top: 0;
  right: ${({ isopen }) => (isopen ? "0" : "-100%")};
  height: 100%;
  background-color: #fff;
  animation: ${({ isopen }) => (isopen ? slideIn : slideOut)} 0.3s ease-in-out;
  z-index: 999;
  transition: right 0.2s ease-in-out;
  width: 486px;
  flex-shrink: 0;
  background: #0f52ba;
  box-shadow: -5px 0px 6px 0px rgba(0, 0, 0, 0.13);
`;

export default Page;
