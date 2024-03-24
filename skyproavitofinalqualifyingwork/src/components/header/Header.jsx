import React from "react";
import styles from "./header.module.css";
import classnames from "classnames";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAuth } from "../../context/useAuth";
const Header = () => {
  const { logout } = useAuth();
  const { isAuth } = useSelector((store) => store.user);
  const location = useLocation();
  return (
    <header className={styles.header}>
      <nav className={styles.headerNav}>
        {isAuth ? (
          <>
            <Link
              state={{ background: location }}
              to="/add"
              className={classnames(styles.headerBtnPutAd, styles.btnHov01)}
              id="btputAd"
            >
              {/* header__btn-putAd btn-hov01" */}
              Разместить объявление
            </Link>
            <Link to="/profile" class={styles.headerBtnMainEnter}>
              Личный кабинет
            </Link>
            <button onClick={logout} type="button">
              Выйти
            </button>
          </>
        ) : (
          <>
            <Link to="/signin" class={styles.headerBtnMainEnter}>
              Вход в личный кабинет
            </Link>
          </>
        )}

        {/* <Link to="" class="header__btn-lk btn-hov01" id="btnlk">
          Личный кабинет
        </Link> */}
      </nav>
    </header>
  );
};

export default Header;
