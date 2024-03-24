import React from "react";
import "./profile.css";
import { Link } from "react-router-dom";
const Profile = () => {
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
                <Link to="/" className="menu__btn btn-hov02">
                  Вернуться на&nbsp;главную
                </Link>
              </form>
            </div>

            <h2 className="main__h2">Здравствуйте, Антон!</h2>

            <div className="main__profile profile">
              <div className="profile__content">
                <h3 className="profile__title title">Настройки профиля</h3>
                <div className="profile__settings settings">
                  <div className="settings__left">
                    <div className="settings__img">
                      <use href="" target="_self">
                        <img src="#" alt="" />
                      </use>
                    </div>
                    <use className="settings__change-photo" href="" target="_self">
                      Заменить
                    </use>
                  </div>
                  <div className="settings__right">
                    <form className="settings__form" action="#">
                      <div className="settings__div">
                        <label for="fname">Имя</label>
                        <input
                          className="settings__f-name"
                          id="settings-fname"
                          name="fname"
                          type="text"
                          value="Ан"
                          placeholder=""
                        />
                      </div>

                      <div className="settings__div">
                        <label for="lname">Фамилия</label>
                        <input
                          className="settings__l-name"
                          id="settings-lname"
                          name="lname"
                          type="text"
                          value="Городецкий"
                          placeholder=""
                        />
                      </div>

                      <div className="settings__div">
                        <label for="city">Город</label>
                        <input
                          className="settings__city"
                          id="settings-city"
                          name="city"
                          type="text"
                          value="Санкт-Петербург"
                          placeholder=""
                        />
                      </div>

                      <div className="settings__div">
                        <label for="phone">Телефон</label>
                        <input
                          className="settings__phone"
                          id="settings-phone"
                          name="phone"
                          type="tel"
                          value="89161234567"
                          placeholder="+79161234567"
                        />
                      </div>

                      <button className="settings__btn btn-hov02" id="settings-btn">
                        Сохранить
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="main__title title">Мои товары</h3>
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

export default Profile;
