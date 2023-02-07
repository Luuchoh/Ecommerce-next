import React from "react";

import useGetProducts from "../hooks/useGetProducts";
import ProductItem from "@components/ProductItem";

import "@styles/ProductList.scss";

const API = "http://api.escuelajs.co/api/v1/products";

const ProductList = () => {
  const products = useGetProducts(API);
  return (
    <section className="main-container">
      <div className="product-list-container">
        {products.map((product: TProduct) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
