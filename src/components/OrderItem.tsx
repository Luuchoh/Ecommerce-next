import React, { useContext } from "react";

import Close from "@icons/icon_close.png";
import AppContext from "../context/AppContext";

const OrderItem = ({ product }: { product: TProduct }) => {
  const { removeFromCart } = useContext(AppContext) as Context;

  const handleRemove = (item: TProduct) => {
    removeFromCart(item);
  };

  return (
    <div className="shopping-cart">
      <figure>
        <img src={product.images[0]} alt="bike" />
      </figure>
      <p>{product.title}</p>
      <p>{product.price}</p>
      <img
        src={Close}
        alt={`close-${product.id}`}
        onClick={() => handleRemove(product)}
      />
    </div>
  );
};

export default OrderItem;
