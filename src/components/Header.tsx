import React, { useContext } from 'react';
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
  const { state, toggleOrder, toggleMenu } = useContext(AppContext) as Context;

  const handleToggleOrder = () => {
    toggleOrder();
    if (state.menuIsOpen) toggleMenu();
  };

  const handleToggleMenu = () => {
    toggleMenu();
    state.orderIsOpen && toggleOrder();
  };

  return (
    <nav className={styles.Nav}>
      <Image src={menu} alt="menu" className={styles.menu} width={25} height={25} />
      <div className={styles['navbar-left']}>
        <Link href="/">
          <Image src={yardSale} alt="logo" className={styles['nav-logo']} width={25} height={25} />
        </Link>
        <ul>
          <li>
            <Link href="/">All</Link>
          </li>
          <li>
            <Link href="/">Clothes</Link>
          </li>
          <li>
            <Link href="/">Electronics</Link>
          </li>
          <li>
            <Link href="/">Furnitures</Link>
          </li>
          <li>
            <Link href="/">Toys</Link>
          </li>
          <li>
            <Link href="/">Others</Link>
          </li>
        </ul>
      </div>
      <div className={styles['navbar-right']}>
        <ul>
          <li className={styles['navbar-email']} onClick={handleToggleMenu}>
            correo@example.com
          </li>
          <li className={styles['navbar-shopping-cart']} onClick={handleToggleOrder}>
            <Image src={shoppingCart} alt="shopping cart" width={25} height={25} />
            {!!state && state.cart.length > 0 && <div>{state.cart.length}</div>}
          </li>
        </ul>
      </div>
      {state.orderIsOpen && <Cart />}
      {state.menuIsOpen && <DesktopMenu />}
    </nav>
  );
};

export default Header;
