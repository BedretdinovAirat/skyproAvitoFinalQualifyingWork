import React from "react";
import styles from "./addNewat.module.css";
const AddNewat = () => {
  return (
    <div className={styles.modalContainer}>
      <div className={styles.containerBg}>
        <div className={styles.modalBlock}>
          <div className={styles.modalContent}>
            <h3 className={styles.modalTitle}>Новое объявление</h3>
            <div className={styles.modalBtnClose}>
              <div className={styles.modalBtnCloseLine}></div>
            </div>
            <form
              className={styles.modalFormNewArt} //"modal__form-newArt form-newArt"
              id="formNewArt"
              action="#"
            >
              <div className={styles.formNewArtBlock}>
                <label for="name">Название</label>
                <input
                  className={styles.formNewArtInput}
                  type="text"
                  name="name"
                  id="formName"
                  placeholder="Введите название"
                />
              </div>
              <div className={styles.formNewArtBlock}>
                <label for="text">Описание</label>
                <textarea
                  className={styles.formNewArtArea}
                  name="text"
                  id="formArea"
                  cols="auto"
                  rows="10"
                  placeholder="Введите описание"
                ></textarea>
              </div>
              <div className={styles.formNewArtBlock}>
                <p className={styles.formNewArtP}>
                  Фотографии товара<span>не более 5 фотографий</span>
                </p>
                <div className={styles.formNewArtBarImg}>
                  <div className={styles.formNewArtImg}>
                    <img src="" alt="" />
                    <div className={styles.formNewArtImgCover}></div>
                  </div>
                  <div className={styles.formNewArtImg}>
                    <img src="" alt="" />
                    <div className={styles.formNewArtImgCover}></div>
                  </div>
                  <div className={styles.formNewArtImg}>
                    <div className={styles.formNewArtImgCover}></div>
                    <img src="" alt="" />
                  </div>
                  <div className={styles.formNewArtImg}>
                    <div className={styles.formNewArtImgCover}></div>
                    <img src="" alt="" />
                  </div>
                  <div className={styles.formNewArtImg}>
                    <div className={styles.formNewArtImgCover}></div>
                    <img src="" alt="" />
                  </div>
                </div>
              </div>
              <div className={styles.formNewArtBlock}>
                {/* // form-newArt__block block-price */}
                <label for="price">Цена</label>
                <input
                  className={styles.formNewArtInputPrice}
                  type="text"
                  name="price"
                  id="formName"
                />
                <div className={styles.formNewArtInputPriceCover}></div>
              </div>

              <button
                className={styles.formNewArtBtnPub}
                // "form-newArt__btn-pub btn-hov02"
                id="btnPublish"
              >
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
