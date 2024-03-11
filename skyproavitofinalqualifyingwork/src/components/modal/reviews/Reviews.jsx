import React from "react";
import "./reviews.css";
const Reviews = () => {
  return (
    <div class="wrapper">
      <div class="container-bg">
        <div class="modal__block">
          <div class="modal__content">
            <h3 class="modal__title">Отзывы о товаре</h3>
            <div class="modal__btn-close">
              <div class="modal__btn-close-line"></div>
            </div>
            <div class="modal__scroll">
              <form
                class="modal__form-newArt form-newArt"
                id="formNewArt"
                action="#"
              >
                <div class="form-newArt__block">
                  <label for="text">Добавить отзыв</label>
                  <textarea
                    class="form-newArt__area"
                    name="text"
                    id="formArea"
                    cols="auto"
                    rows="5"
                    placeholder="Введите описание"
                  ></textarea>
                </div>
                <button class="form-newArt__btn-pub btn-hov02" id="btnPublish">
                  Опубликовать
                </button>
              </form>

              <div class="modal__reviews reviews">
                <div class="reviews__review review">
                  <div class="review__item">
                    <div class="review__left">
                      <div class="review__img">
                        <img src="" alt="" />
                      </div>
                    </div>
                    <div class="review__right">
                      <p class="review__name font-t">
                        Олег <span>14 августа</span>
                      </p>
                      <h5 class="review__title font-t">Комментарий</h5>
                      <p class="review__text font-t">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="reviews__review review">
                  <div class="review__item">
                    <div class="review__left">
                      <div class="review__img">
                        <img src="" alt="" />
                      </div>
                    </div>
                    <div class="review__right">
                      <p class="review__name font-t">
                        Олег <span>14 августа</span>
                      </p>
                      <h5 class="review__title font-t">Комментарий</h5>
                      <p class="review__text font-t">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="reviews__review review">
                  <div class="review__item">
                    <div class="review__left">
                      <div class="review__img">
                        <img src="" alt="" />
                      </div>
                    </div>
                    <div class="review__right">
                      <p class="review__name font-t">
                        Олег <span>14 августа</span>
                      </p>
                      <h5 class="review__title font-t">Комментарий</h5>
                      <p class="review__text font-t">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="reviews__review review">
                  <div class="review__item">
                    <div class="review__left">
                      <div class="review__img">
                        <img src="" alt="" />
                      </div>
                    </div>
                    <div class="review__right">
                      <p class="review__name font-t">
                        Олег <span>14 августа</span>
                      </p>
                      <h5 class="review__title font-t">Комментарий</h5>
                      <p class="review__text font-t">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="reviews__review review">
                  <div class="review__item">
                    <div class="review__left">
                      <div class="review__img">
                        <img src="" alt="" />
                      </div>
                    </div>
                    <div class="review__right">
                      <p class="review__name font-t">
                        Олег <span>14 августа</span>
                      </p>
                      <h5 class="review__title font-t">Комментарий</h5>
                      <p class="review__text font-t">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
