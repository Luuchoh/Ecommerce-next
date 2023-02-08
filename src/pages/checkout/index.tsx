import React from "react";

import OrderInfo from "@components/OrderInfo";

import styles from "@styles/Checkout.module.scss";

const Checkout = () => {
  return (
    <>
      <div className={styles.checkout}>
        <div className={styles["checkout-container"]}>
          <h1 className={styles.title}>My orders</h1>

          <div className={styles["checkout-content"]}>
            <OrderInfo />
            <OrderInfo />
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;