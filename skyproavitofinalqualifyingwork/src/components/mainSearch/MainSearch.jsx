import React from "react";
import "./mainSearch.css";
import { Link } from "react-router-dom";
const MainSearch = () => {
  return (
    <>
      <div className="main__search search">
        <Link to="/" className="search__logo-link">
          <img className="search__logo-img" src="./img/logo.png" alt="logo" />
        </Link>
        <Link className="search__logo-mob-link">
          <img
            className="search__logo-mob-img"
            src="./img/logo-mob.png"
            alt="logo"
          />
        </Link>
        <form className="search__form" action="#">
          <input
            className="search__text"
            type="search"
            placeholder="Поиск по объявлениям"
            name="search"
          />
          <input
            className="search__text-mob"
            type="search"
            placeholder="Поиск"
            name="search-mob"
          />
          <button className="search__btn btn-hov02">Найти</button>
        </form>
      </div>
    </>
  );
};

export default MainSearch;
