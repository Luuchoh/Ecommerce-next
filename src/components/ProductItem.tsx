import React, { useContext } from "react";
import Image from "next/image";

import AddToCart from "@icons/bt_add_to_cart.svg";
import AppContext from "@context/AppContext";

import styles from "@styles/ProductList.module.scss";

const ProductItem = ({ product }: { product: TProduct }) => {
  const { addToCart } = useContext(AppContext) as Context;

  const handleClick = (item: TProduct) => {
    addToCart(item);
  };
  return (
    <div className={styles["product-card"]}>
      <Image src={product.images[0]} alt={product.title} width={240} height={240}/>
      <div className={styles["product-info-card"]}>
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => handleClick(product)}>
          <Image src={AddToCart} alt={`image-cart${product.id}`} width={25} height={25}/>
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
