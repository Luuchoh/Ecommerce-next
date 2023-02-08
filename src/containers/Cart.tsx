import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";

import OrderItem from "../components/OrderItem";
import AppContext from "../context/AppContext";

import Arrow from "@icons/flechita.svg";
import styles from "@styles/Cart.module.scss";

const Cart = () => {
  const { state } = useContext(AppContext) as Context;

  const sumTotal = () => {
    const reducer = (accumulator: number, currentValue: TProduct) =>
      accumulator + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <aside className={styles.Cart}>
      <div className={styles['title-container']}>
        <Image src={Arrow} alt="arrow" />
        <p className={styles.title}>My order</p>
      </div>

      <div className={styles["my-order-content"]}>
        {state.cart.map((item: TProduct) => (
          <OrderItem product={item} key={`orderItem-${item.id}`} />
        ))}

        <div className={styles.order}>
          <p>
            <span>Total</span>
          </p>
          <p>${sumTotal()}</p>
        </div>

        <Link href='/checkout' legacyBehavior>
          <button className={styles['primary-button']}>
            Checkout
          </button>
        </Link>
      </div>
    </aside>
  );
};

export default Cart;
