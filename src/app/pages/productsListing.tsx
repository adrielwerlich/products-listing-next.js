import React from "react";
import ProductCard from "../components/ProductCard/ProductCard";
import { Product } from "../types/product";
import {
  CardGrid,
  Container
} from "./ProductsListing.styles"


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
