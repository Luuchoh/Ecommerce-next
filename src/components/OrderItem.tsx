import React, { useContext } from "react";
import Image from "next/image";

import Close from "@icons/icon_close.png";
import AppContext from "@context/AppContext";

import styles from "@styles/Cart.module.scss";

const OrderItem = ({ product }: { product: TProduct }) => {
  const { removeFromCart } = useContext(AppContext) as Context;

  const handleRemove = (item: TProduct) => {
    removeFromCart(item);
  };

  return (
    <div className={styles["shopping-cart"]}>
      <figure>
        <Image src={product.images[0]} alt="bike" width={70} height={70} />
      </figure>
      <p>{product.title}</p>
      <p>{product.price}</p>
      <Image
        src={Close}
        alt={`close-${product.id}`}
        onClick={() => handleRemove(product)}
      />
    </div>
  );
};

export default OrderItem;
