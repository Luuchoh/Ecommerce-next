import React from "react";
import OrderInfo from "@components/OrderInfo";
import OrderItem from "@components/OrderItem";

import "@styles/Order.scss";

const Order = () => {
  return (
    <div className="my-order">
      <div className="my-order-container">
        <h1 className="title">My order</h1>

        <div className="my-order-content">
          <OrderInfo />
          <OrderItem />
        </div>
      </div>
    </div>
  );
};

export default Order;
