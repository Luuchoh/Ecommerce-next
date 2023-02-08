import React, { useContext, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import DesktopMenu from '@components/DesktopMenu';
import Cart from '@containers/Cart';

import AppContext from '@context/AppContext';

import menu from '@icons/icon_menu.svg';
import yardSale from '@logos/logo_yard_sale.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';

import styles from '@styles/Header.module.scss';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleOrder, setToggleOrder] = useState(false);
  const { state } = useContext(AppContext) as Context;

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav className={styles.Nav}>
      <Image src={menu} alt="menu" className={styles.menu} width={25} height={25} />
      <div className={styles['navbar-left']}>
        <Link href='/'>
        <Image src={yardSale} alt="logo" className={styles['nav-logo']} width={25} height={25} />
        </Link>
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>
      <div className={styles['navbar-right']}>
        <ul>
          <li className={styles['navbar-email']} onClick={handleToggle}>
            correo@example.com
          </li>
          <li className={styles['navbar-shopping-cart']} onClick={() => setToggleOrder(!toggleOrder)}>
            <Image src={shoppingCart} alt="shopping cart" width={25} height={25} />
            {!!state && state.cart.length > 0 && <div>{state.cart.length}</div>}
          </li>
        </ul>
      </div>
      {toggleOrder && <Cart />}
      {toggle && <DesktopMenu />}
    </nav>
  );
};

export default Header;
