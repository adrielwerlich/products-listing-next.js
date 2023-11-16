import React from "react";
import ProductCard from "../components/ProductCard";
import { Product } from "../types/product";
import styled from "styled-components";

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 300px;
  gap: 23px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  margin-top: 100px;
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #007aff;
    border-radius: 20px;
  }
`;

interface Props {
  products: Product[];
}

const IndexPage: React.FC<Props> = ({ products }) => {
  console.log(products);

  return (
    <Container>
      <CardGrid>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </CardGrid>
    </Container>
  );
};

export default IndexPage;
