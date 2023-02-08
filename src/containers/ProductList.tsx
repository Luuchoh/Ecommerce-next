import React from "react";

import ProductItem from "@components/ProductItem";
import useGetProducts from "@hooks/useGetProducts";

import styles from "@styles/ProductList.module.scss";

const API = "http://api.escuelajs.co/api/v1/products";

const ProductList = () => {
  let products = useGetProducts(API);
  products = products.filter((p: TProduct) => p.images[0].includes('https://'))
  return (
    <section className={styles["main-container"]}>
      <div className={styles["product-list-container"]}>
        {products.map((product: TProduct) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
