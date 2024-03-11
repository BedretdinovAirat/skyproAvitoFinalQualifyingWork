import React from "react";
import "./main.css";
import * as S from "./MainStyled.js";
const Main = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Header>
          <S.NavHeader>
            <S.Button
              class="header__btn-main-enter btn-hov01"
              id="btnMainEnter"
            >
              Вход в личный кабинет
            </S.Button>
          </S.NavHeader>
        </S.Header>
        <S.Main class="main">
          <div class="main__search search">
            <use class="search__logo-link" href="#" target="_blank">
              <img class="search__logo-img" src="./img/logo.png" alt="logo" />
            </use>
            <use class="search__logo-mob-link" href="#" target="_blank">
              <img
                class="search__logo-mob-img"
                src="./img/logo-mob.png"
                alt="logo"
              />
            </use>
            <form class="search__form" action="#">
              <input
                class="search__text"
                type="search"
                placeholder="Поиск по объявлениям"
                name="search"
              />
              <input
                class="search__text-mob"
                type="search"
                placeholder="Поиск"
                name="search-mob"
              />
              <button class="search__btn btn-hov02">Найти</button>
            </form>
          </div>
          <div class="main__container">
            <h2 class="main__h2">Объявления</h2>

            <div class="main__content">
              <div class="content__cards cards">
                <div class="cards__item">
                  <div class="cards__card card">
                    <div class="card__image">
                      <use href="#" target="_blank">
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
                      <use href="#" target="_blank">
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
                      <use href="#" target="_blank">
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
                      <use href="#" target="_blank">
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
                      <use href="#" target="_blank">
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
                      <use href="#" target="_blank">
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
                      <use href="#" target="_blank">
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
                      <use href="#" target="_blank">
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
                      <use href="#" target="_blank">
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
                      <use href="#" target="_blank">
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
        </S.Main>

        <footer class="footer">
          <div class="footer__container">
            <div class="footer__img">
              <use href="" target="_self">
                <img src="./img/icon_01.png" alt="home" />
              </use>
            </div>
            <div class="footer__img">
              <use href="" target="_self">
                <img src="./img/icon_02.png" alt="home" />
              </use>
            </div>
            <div class="footer__img">
              <use href="" target="_self">
                <img src="./img/icon_03.png" alt="home" />
              </use>
            </div>
          </div>
        </footer>
      </S.Container>
    </S.Wrapper>
  );
};

export default Main;
