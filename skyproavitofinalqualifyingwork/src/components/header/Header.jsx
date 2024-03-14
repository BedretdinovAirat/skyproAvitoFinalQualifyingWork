import React from "react";
import styles from "./header.module.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header class={styles.header}>
      <nav class={styles.headerNav}>
        <Link to="/signin" class={styles.headerBtnMainEnter}>
          Вход в личный кабинет
        </Link>
        <Link to="/add" class="header__btn-putAd btn-hov01" id="btputAd">
          Разместить объявление
        </Link>
        {/* <Link to="" class="header__btn-lk btn-hov01" id="btnlk">
          Личный кабинет
        </Link> */}
      </nav>
    </header>
  );
};

export default Header;
