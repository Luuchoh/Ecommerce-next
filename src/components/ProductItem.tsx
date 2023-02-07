import React, { useContext } from "react";

import AddToCart from "@icons/bt_add_to_cart.svg";
import AppContext from "../context/AppContext";

const ProductItem = ({ product }: { product: TProduct }) => {
  const { addToCart } = useContext(AppContext) as Context;

  const handleClick = (item: TProduct) => {
    addToCart(item);
  };
  return (
    <div className="product-card">
      <img src={product.images[0]} alt={product.title} />
      <div className="product-info-card">
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => handleClick(product)}>
          <img src={AddToCart} alt={`image-cart${product.id}`} />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
