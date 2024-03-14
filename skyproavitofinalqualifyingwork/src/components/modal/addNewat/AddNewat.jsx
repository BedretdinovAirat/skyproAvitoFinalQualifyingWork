import React from "react";
import styles from "./addNewat.module.css";
const AddNewat = () => {
  return (
    <div class="wrapper">
      <div class="container-bg">
        <div class="modal__block">
          <div class="modal__content">
            <h3 class="modal__title">Новое объявление</h3>
            <div class="modal__btn-close">
              <div class="modal__btn-close-line"></div>
            </div>
            <form
              class="modal__form-newArt form-newArt"
              id="formNewArt"
              action="#"
            >
              <div class="form-newArt__block">
                <label for="name">Название</label>
                <input
                  class="form-newArt__input"
                  type="text"
                  name="name"
                  id="formName"
                  placeholder="Введите название"
                />
              </div>
              <div class="form-newArt__block">
                <label for="text">Описание</label>
                <textarea
                  class="form-newArt__area"
                  name="text"
                  id="formArea"
                  cols="auto"
                  rows="10"
                  placeholder="Введите описание"
                ></textarea>
              </div>
              <div class="form-newArt__block">
                <p class="form-newArt__p">
                  Фотографии товара<span>не более 5 фотографий</span>
                </p>
                <div class="form-newArt__bar-img">
                  <div class="form-newArt__img">
                    <img src="" alt="" />
                    <div class="form-newArt__img-cover"></div>
                  </div>
                  <div class="form-newArt__img">
                    <img src="" alt="" />
                    <div class="form-newArt__img-cover"></div>
                  </div>
                  <div class="form-newArt__img">
                    <div class="form-newArt__img-cover"></div>
                    <img src="" alt="" />
                  </div>
                  <div class="form-newArt__img">
                    <div class="form-newArt__img-cover"></div>
                    <img src="" alt="" />
                  </div>
                  <div class="form-newArt__img">
                    <div class="form-newArt__img-cover"></div>
                    <img src="" alt="" />
                  </div>
                </div>
              </div>
              <div class="form-newArt__block block-price">
                <label for="price">Цена</label>
                <input
                  class="form-newArt__input-price"
                  type="text"
                  name="price"
                  id="formName"
                />
                <div class="form-newArt__input-price-cover"></div>
              </div>

              <button class="form-newArt__btn-pub btn-hov02" id="btnPublish">
                Опубликовать
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewat;
