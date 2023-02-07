import React, { useContext } from "react";

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
      <div className="title-container">
        <img src={Arrow} alt="arrow" />
        <p className="title">My order</p>
      </div>

      <div className="my-order-content">
        {state.cart.map((item: TProduct) => (
          <OrderItem product={item} key={`orderItem-${item.id}`} />
        ))}

        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>${sumTotal()}</p>
        </div>

        <button className="primary-button">Checkout</button>
      </div>
    </aside>
  );
};

export default Cart;
