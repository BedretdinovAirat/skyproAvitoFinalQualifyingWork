import React from "react";
import "./sellerProfile.css";
import Layout from "../../components/layout/Layout";
const SellerProfile = () => {
  return (
    <Layout>
      <main class="main">
        <div class="main__container">
          <div class="main__center-block">
            <div class="main__menu menu">
              <use class="menu__logo-link" href="" target="_blank">
                <img class="menu__logo-img" src="img/logo.png" alt="logo" />
              </use>
              <form class="menu__form" action="#">
                <button class="menu__btn btn-hov02" id="btnGoBack">
                  Вернуться на&nbsp;главную
                </button>
              </form>
            </div>

            <h2 class="main__h2">Профиль продавца</h2>

            <div class="main__profile-sell profile-sell">
              <div class="profile-sell__content">
                <div class="profile-sell__seller seller">
                  <div class="seller__left">
                    <div class="seller__img">
                      <use href="" target="_self">
                        <img src="#" alt="" />
                      </use>
                    </div>
                  </div>
                  <div class="seller__right">
                    <h3 class="seller__title">Кирилл Матвеев</h3>
                    <p class="seller__city">Санкт-Петербург</p>
                    <p class="seller__inf">Продает товары с августа 2021</p>

                    <div class="seller__img-mob-block">
                      <div class="seller__img-mob">
                        <use href="" target="_self">
                          <img src="#" alt="" />
                        </use>
                      </div>
                    </div>

                    <button class="seller__btn btn-hov02">
                      Показать&nbsp;телефон
                      <span>8&nbsp;905&nbsp;ХХХ&nbsp;ХХ&nbsp;ХХ</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <h3 class="main__title">Товары продавца</h3>
          </div>
          <div class="main__content">
            <div class="content__cards cards">
              <div class="cards__item">
                <div class="cards__card card">
                  <div class="card__image">
                    <use href="" target="_blank">
                      <img src="#" alt="picture" />
                    </use>
                  </div>
                  <div class="card__content">
                    <use href="" target="_blank">
                      <h3 class="card__title">
                        Ракетка для большого тенниса Triumph Pro ST
                      </h3>
                    </use>
                    <p class="card__price">2&nbsp;200&nbsp;₽</p>
                    <p class="card__place">Санкт Петербург</p>
                    <p class="card__date">Сегодня в&nbsp;10:45</p>
                  </div>
                </div>
              </div>

              <div class="cards__item">
                <div class="cards__card card">
                  <div class="card__image">
                    <use href="" target="_blank">
                      <img src="#" alt="picture" />
                    </use>
                  </div>
                  <div class="card__content">
                    <use href="" target="_blank">
                      <h3 class="card__title">
                        Ракетка для большого тенниса Triumph Pro ST
                      </h3>
                    </use>
                    <p class="card__price">2&nbsp;200&nbsp;₽</p>
                    <p class="card__place">Санкт Петербург</p>
                    <p class="card__date">Сегодня в&nbsp;10:45</p>
                  </div>
                </div>
              </div>

              <div class="cards__item">
                <div class="cards__card card">
                  <div class="card__image">
                    <use href="" target="_blank">
                      <img src="#" alt="picture" />
                    </use>
                  </div>
                  <div class="card__content">
                    <use href="" target="_blank">
                      <h3 class="card__title">
                        Ракетка для большого тенниса Triumph Pro ST
                      </h3>
                    </use>
                    <p class="card__price">2&nbsp;200&nbsp;₽</p>
                    <p class="card__place">Санкт Петербург</p>
                    <p class="card__date">Сегодня в&nbsp;10:45</p>
                  </div>
                </div>
              </div>

              <div class="cards__item">
                <div class="cards__card card">
                  <div class="card__image">
                    <use href="" target="_blank">
                      <img src="#" alt="picture" />
                    </use>
                  </div>
                  <div class="card__content">
                    <use href="" target="_blank">
                      <h3 class="card__title">
                        Ракетка для большого тенниса Triumph Pro ST
                      </h3>
                    </use>
                    <p class="card__price">2&nbsp;200&nbsp;₽</p>
                    <p class="card__place">Санкт Петербург</p>
                    <p class="card__date">Сегодня в&nbsp;10:45</p>
                  </div>
                </div>
              </div>

              <div class="cards__item">
                <div class="cards__card card">
                  <div class="card__image">
                    <use href="" target="_blank">
                      <img src="#" alt="picture" />
                    </use>
                  </div>
                  <div class="card__content">
                    <use href="" target="_blank">
                      <h3 class="card__title">
                        Ракетка для большого тенниса Triumph Pro ST
                      </h3>
                    </use>
                    <p class="card__price">2&nbsp;200&nbsp;₽</p>
                    <p class="card__place">Санкт Петербург</p>
                    <p class="card__date">Сегодня в&nbsp;10:45</p>
                  </div>
                </div>
              </div>

              <div class="cards__item">
                <div class="cards__card card">
                  <div class="card__image">
                    <use href="" target="_blank">
                      <img src="#" alt="picture" />
                    </use>
                  </div>
                  <div class="card__content">
                    <use href="" target="_blank">
                      <h3 class="card__title">
                        Ракетка для большого тенниса Triumph Pro ST
                      </h3>
                    </use>
                    <p class="card__price">2&nbsp;200&nbsp;₽</p>
                    <p class="card__place">Санкт Петербург</p>
                    <p class="card__date">Сегодня в&nbsp;10:45</p>
                  </div>
                </div>
              </div>
            </div>
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
    </Layout>
  );
};

export default SellerProfile;
