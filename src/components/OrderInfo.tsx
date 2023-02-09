import React from 'react';

import styles from '@styles/Checkout.module.scss';

const OrderInfo = () => {
  return (
    <div className={styles.order}>
      <p>
        <span>03.25.21</span>
        <span>6 articles</span>
      </p>
      <p>$560.00</p>
    </div>
  );
};

export default OrderInfo;
