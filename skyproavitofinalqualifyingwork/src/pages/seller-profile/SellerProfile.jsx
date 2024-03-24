import React from "react";
import "./sellerProfile.css";
const SellerProfile = () => {
  return (
    <>
      <main className="main">
        <div className="main__container">
          <div className="main__center-block">
            <div className="main__menu menu">
              <use className="menu__logo-link" href="" target="_blank">
                <img className="menu__logo-img" src="img/logo.png" alt="logo" />
              </use>
              <form className="menu__form" action="#">
                <button className="menu__btn btn-hov02" id="btnGoBack">
                  Вернуться на&nbsp;главную
                </button>
              </form>
            </div>

            <h2 className="main__h2">Профиль продавца</h2>

            <div className="main__profile-sell profile-sell">
              <div className="profile-sell__content">
                <div className="profile-sell__seller seller">
                  <div className="seller__left">
                    <div className="seller__img">
                      <use href="" target="_self">
                        <img src="#" alt="" />
                      </use>
                    </div>
                  </div>
                  <div className="seller__right">
                    <h3 className="seller__title">Кирилл Матвеев</h3>
                    <p className="seller__city">Санкт-Петербург</p>
                    <p className="seller__inf">Продает товары с августа 2021</p>

                    <div className="seller__img-mob-block">
                      <div className="seller__img-mob">
                        <use href="" target="_self">
                          <img src="#" alt="" />
                        </use>
                      </div>
                    </div>

                    <button className="seller__btn btn-hov02">
                      Показать&nbsp;телефон
                      <span>8&nbsp;905&nbsp;ХХХ&nbsp;ХХ&nbsp;ХХ</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="main__title">Товары продавца</h3>
          </div>
          <div className="main__content">
            <div className="content__cards cards">
              <div className="cards__item">
                <div className="cards__card card">
                  <div className="card__image">
                    <use href="" target="_blank">
                      <img src="#" alt="picture" />
                    </use>
                  </div>
                  <div className="card__content">
                    <use href="" target="_blank">
                      <h3 className="card__title">
                        Ракетка для большого тенниса Triumph Pro ST
                      </h3>
                    </use>
                    <p className="card__price">2&nbsp;200&nbsp;₽</p>
                    <p className="card__place">Санкт Петербург</p>
                    <p className="card__date">Сегодня в&nbsp;10:45</p>
                  </div>
                </div>
              </div>

              <div className="cards__item">
                <div className="cards__card card">
                  <div className="card__image">
                    <use href="" target="_blank">
                      <img src="#" alt="picture" />
                    </use>
                  </div>
                  <div className="card__content">
                    <use href="" target="_blank">
                      <h3 className="card__title">
                        Ракетка для большого тенниса Triumph Pro ST
                      </h3>
                    </use>
                    <p className="card__price">2&nbsp;200&nbsp;₽</p>
                    <p className="card__place">Санкт Петербург</p>
                    <p className="card__date">Сегодня в&nbsp;10:45</p>
                  </div>
                </div>
              </div>

              <div className="cards__item">
                <div className="cards__card card">
                  <div className="card__image">
                    <use href="" target="_blank">
                      <img src="#" alt="picture" />
                    </use>
                  </div>
                  <div className="card__content">
                    <use href="" target="_blank">
                      <h3 className="card__title">
                        Ракетка для большого тенниса Triumph Pro ST
                      </h3>
                    </use>
                    <p className="card__price">2&nbsp;200&nbsp;₽</p>
                    <p className="card__place">Санкт Петербург</p>
                    <p className="card__date">Сегодня в&nbsp;10:45</p>
                  </div>
                </div>
              </div>

              <div className="cards__item">
                <div className="cards__card card">
                  <div className="card__image">
                    <use href="" target="_blank">
                      <img src="#" alt="picture" />
                    </use>
                  </div>
                  <div className="card__content">
                    <use href="" target="_blank">
                      <h3 className="card__title">
                        Ракетка для большого тенниса Triumph Pro ST
                      </h3>
                    </use>
                    <p className="card__price">2&nbsp;200&nbsp;₽</p>
                    <p className="card__place">Санкт Петербург</p>
                    <p className="card__date">Сегодня в&nbsp;10:45</p>
                  </div>
                </div>
              </div>

              <div className="cards__item">
                <div className="cards__card card">
                  <div className="card__image">
                    <use href="" target="_blank">
                      <img src="#" alt="picture" />
                    </use>
                  </div>
                  <div className="card__content">
                    <use href="" target="_blank">
                      <h3 className="card__title">
                        Ракетка для большого тенниса Triumph Pro ST
                      </h3>
                    </use>
                    <p className="card__price">2&nbsp;200&nbsp;₽</p>
                    <p className="card__place">Санкт Петербург</p>
                    <p className="card__date">Сегодня в&nbsp;10:45</p>
                  </div>
                </div>
              </div>

              <div className="cards__item">
                <div className="cards__card card">
                  <div className="card__image">
                    <use href="" target="_blank">
                      <img src="#" alt="picture" />
                    </use>
                  </div>
                  <div className="card__content">
                    <use href="" target="_blank">
                      <h3 className="card__title">
                        Ракетка для большого тенниса Triumph Pro ST
                      </h3>
                    </use>
                    <p className="card__price">2&nbsp;200&nbsp;₽</p>
                    <p className="card__place">Санкт Петербург</p>
                    <p className="card__date">Сегодня в&nbsp;10:45</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="footer__container">
          <div className="footer__img">
            <use href="" target="_self">
              <img src="img/icon_01.png" alt="home" />
            </use>
          </div>
          <div className="footer__img">
            <use href="" target="_self">
              <img src="img/icon_02.png" alt="home" />
            </use>
          </div>
          <div className="footer__img">
            <use href="" target="_self">
              <img src="img/icon_03.png" alt="home" />
            </use>
          </div>
        </div>
      </footer>
    </>
  );
};

export default SellerProfile;
