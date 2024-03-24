import React from "react";
import styles from "./main.module.css";
import { Link, Outlet } from "react-router-dom";
import { useGetAllAdsQuery } from "../../store/api/advApi";
const Main = () => {
  const { data } = useGetAllAdsQuery();
  return (
    <>
      <main className={styles.main}>
        <div className="main__search search">
          <use className="search__logo-link" href="#" target="_blank">
            <img className="search__logo-img" src="./img/logo.png" alt="logo" />
          </use>
          <use className="search__logo-mob-link" href="#" target="_blank">
            <img
              className="search__logo-mob-img"
              src="./img/logo-mob.png"
              alt="logo"
            />
          </use>
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
        <div className={styles.mainContainer}>
          <h2 className="main__h2">Объявления</h2>

          {/* price title user.city. created_on */}
          <div className={styles.mainContent}>
            <div className="content__cards cards">
              {data?.map((adv) => (
                <Link to={`/article/${adv.id}`}>
                  <div className="cards__item">
                    <div className="cards__card card">
                      <div className="card__image">
                        <use href="#" target="_blank">
                          <img
                            src={
                              adv?.images?.[0]
                                ? `http://localhost:8090/${adv.images[0].url}`
                                : "/img/notImage.png"
                            }
                            alt=""
                          />
                        </use>
                      </div>
                      <div className="card__content">
                        <use href="" target="_blank">
                          <h3 className="card__title">{adv.title}</h3>
                        </use>
                        <p className="card__price">{adv.price}</p>
                        <p className="card__place">{adv.user.city}</p>
                        <p className="card__date">{adv.created_on}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="footer__container">
          <div className="footer__img">
            <use href="" target="_self">
              <img src="./img/icon_01.png" alt="home" />
            </use>
          </div>
          <div className="footer__img">
            <use href="" target="_self">
              <img src="./img/icon_02.png" alt="home" />
            </use>
          </div>
          <div className="footer__img">
            <use href="" target="_self">
              <img src="./img/icon_03.png" alt="home" />
            </use>
          </div>
        </div>
      </footer>

      <Outlet />
    </>
  );
};

export default Main;
