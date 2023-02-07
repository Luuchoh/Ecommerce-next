import React from "react";

import Header from "@components/Header";
import OrderInfo from "@components/OrderInfo";

import "@styles/Checkout.scss";

const Checkout = () => {
  return (
    <>
      <Header />
      <div className="checkout">
        <div className="checkout-container">
          <h1 className="title">My orders</h1>

          <div className="checkout-content">
            <OrderInfo />
            <OrderInfo />
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
