import React from "react";
import "./article.css";
const Article = () => {
  return (
    <div class="wrapper">
      <div class="container">
        <header class="header">
          <nav class="header__nav">
            <div class="header__logo logo-mob">
              <use class="logo-mob__link" href="" target="_blank">
                <img class="logo-mob__img" src="img/logo-mob.png" alt="logo" />
              </use>
            </div>
            <button class="header__btn-putAd btn-hov01" id="btputAd">
              Разместить объявление
            </button>
            <button class="header__btn-lk btn-hov01" id="btnlk">
              Личный кабинет
            </button>
          </nav>
        </header>

        <main class="main">
          <div class="main__container">
            <div class="main__menu menu">
              <use class="menu__logo-link" href="" target="_blank">
                <img class="menu__logo-img" src="img/logo.png" alt="logo" />
              </use>
              <form class="menu__form" action="#">
                <button class="menu__btn-serch btn-hov02" id="btnGoBack">
                  Вернуться на главную
                </button>
              </form>
            </div>
          </div>

          <div class="main__artic artic">
            <div class="artic__content article">
              <div class="article__left">
                <div class="article__fill-img">
                  <div class="article__img">
                    <img src="" alt="" />
                  </div>
                  <div class="article__img-bar">
                    <div class="article__img-bar-div">
                      <img src="" alt="" />
                    </div>
                    <div class="article__img-bar-div">
                      <img src="" alt="" />
                    </div>
                    <div class="article__img-bar-div">
                      <img src="" alt="" />
                    </div>
                    <div class="article__img-bar-div">
                      <img src="" alt="" />
                    </div>
                    <div class="article__img-bar-div">
                      <img src="" alt="" />
                    </div>
                    <div class="article__img-bar-div">
                      <img src="" alt="" />
                    </div>
                  </div>
                  <div class="article__img-bar-mob img-bar-mob">
                    <div class="img-bar-mob__circle circle-active"></div>
                    <div class="img-bar-mob__circle"></div>
                    <div class="img-bar-mob__circle"></div>
                    <div class="img-bar-mob__circle"></div>
                    <div class="img-bar-mob__circle"></div>
                  </div>
                </div>
              </div>
              <div class="article__right">
                <div class="article__block">
                  <h3 class="article__title title">
                    Ракетка для большого тенниса Triumph Pro STС Б/У
                  </h3>
                  <div class="article__info">
                    <p class="article__date">Сегодня в 10:45</p>
                    <p class="article__city">Санкт-Петербург</p>
                    <use class="article__link" href="" target="_blank" rel="">
                      23 отзыва
                    </use>
                  </div>
                  <p class="article__price">2 200 ₽</p>
                  <button class="article__btn btn-hov02">
                    Показать&nbsp;телефон
                    <span>8&nbsp;905&nbsp;ХХХ&nbsp;ХХ&nbsp;ХХ</span>
                  </button>
                  <div class="article__author author">
                    <div class="author__img">
                      <img src="" alt="" />
                    </div>
                    <div class="author__cont">
                      <p class="author__name">Кирилл</p>
                      <p class="author__about">Продает товары с августа 2021</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="main__container">
            <h3 class="main__title title">Описание товара</h3>
            <div class="main__content">
              <p class="main__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </main>

        <footer class="footer">
          <div class="footer__container">
            <div class="footer__img">
              <use href="" target="_self">
                <img src="img/icon_01.png" alt="home" />
              </use>
            </div>
            <div class="footer__img">
              <use href="" target="_self">
                <img src="img/icon_02.png" alt="home" />
              </use>
            </div>
            <div class="footer__img">
              <use href="" target="_self">
                <img src="img/icon_03.png" alt="home" />
              </use>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Article;
