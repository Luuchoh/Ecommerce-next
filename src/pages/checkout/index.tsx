import React from 'react';

import OrderInfo from '@components/OrderInfo';
// import OrderItem from "@components/OrderItem";

import styles from '@styles/Checkout.module.scss';
import Head from 'next/head';

const Checkout = () => {
  return (
    <>
      <Head>
        <title>Yard Store | Checkout</title>
      </Head>
      <div className={styles.checkout}>
        <div className={styles['checkout-container']}>
          <h1 className={styles.title}>My orders</h1>

          <div className={styles['checkout-content']}>
            <OrderInfo />
          </div>
          {/* <OrderItem /> */}
        </div>
      </div>
    </>
  );
};

export default Checkout;
