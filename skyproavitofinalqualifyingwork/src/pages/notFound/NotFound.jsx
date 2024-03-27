import React from "react";
import { Link } from "react-router-dom";
import style from "./notFound.module.css";
const NotFound = () => {
  return (
    <div className={style.notFound}>
      <div className={style.notFoundContent}>
        <h1 className={style.notFoundTitle}>404</h1>
        <p className={style.notFoundSubtitle}>Страница не найдена</p>
        <img
          className={style.notFoundImage}
          src="img/crying.svg"
          alt="sad"
        ></img>
        <p className={style.notFoundText}>
          Возможно, страница была удалена или перенесена на другой адреc
        </p>
        <Link to="/">
          <button className={style.notFoundButton}>
            <use className={style.notFoundLink}>Вернуться на главную</use>;
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
