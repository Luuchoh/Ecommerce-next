import React, { useContext, useState } from "react";

import DesktopMenu from "@components/DesktopMenu";
import Cart from "@containers/Cart";

import AppContext from "@context/AppContext";

import menu from "@icons/icon_menu.svg";
import yardSale from "@logos/logo_yard_sale.svg";
import shoppingCart from "@icons/icon_shopping_cart.svg";

import styles from "@styles/Header.module.scss";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleOrder, setToggleOrder] = useState(false);
  const { state } = useContext(AppContext) as Context;

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav className={styles.Nav}>
      <img src={menu} alt="menu" className="menu" />
      <div className="navbar-left">
        <img src={yardSale} alt="logo" className="nav-logo" />
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
      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleToggle}>
            correo@example.com
          </li>
          <li
            className="navbar-shopping-cart"
            onClick={() => setToggleOrder(!toggleOrder)}
          >
            <img src={shoppingCart} alt="shopping cart" />
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
