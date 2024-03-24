import React, { useState } from "react";
import styles from "./addNewat.module.css";
import { useCreateTextAdMutation } from "../../../store/api/advApi";
import ModalLayout from "../../modalLayout/ModalLayout";
import InputImage from "../../InputImage/InputImage";
const AddNewat = () => {
  const [adData, setAdData] = useState({
    title: "",
    description: "",
    price: "",
    images: [],
  });
  const [createTextAd] = useCreateTextAdMutation();
  const onChange = (event) => {
    const { name, value } = event.target;
    setAdData({ ...adData, [name]: value });
  };
  const onClick = () => {
    const { title, description, price } = adData;
    if (!title || !description || !price) {
      alert("no!");
      return;
    }
    if (!adData.images.length) {
      createTextAd({ title, description, price });
    }
  };
  return (
    <ModalLayout>
      <form
        className={styles.modalFormNewArt} //"modal__form-newArt form-newArt"
        id="formNewArt"
        action="#"
      >
        <div className={styles.formNewArtBlock}>
          <label for="name">Название</label>
          <input
            onChange={onChange}
            value={adData.title}
            className={styles.formNewArtInput}
            type="text"
            name="title"
            id="formName"
            placeholder="Введите название"
          />
        </div>
        <div className={styles.formNewArtBlock}>
          <label for="text">Описание</label>
          <textarea
            onChange={onChange}
            value={adData.description}
            className={styles.formNewArtArea}
            name="description"
            id="formArea"
            cols="auto"
            rows="10"
            placeholder="Введите описание"
          ></textarea>
        </div>
        <InputImage />
        <div className={styles.formNewArtBlock}>
          {/* // form-newArt__block block-price */}
          <label for="price">Цена</label>
          <input
            onChange={onChange}
            value={adData.price}
            className={styles.formNewArtInputPrice}
            type="text"
            name="price"
            id="formName"
          />
          <div className={styles.formNewArtInputPriceCover}></div>
        </div>

        <button
          type="button"
          onClick={onClick}
          className={styles.formNewArtBtnPub}
          // "form-newArt__btn-pub btn-hov02"
          id="btnPublish"
        >
          Опубликовать
        </button>
      </form>
    </ModalLayout>
  );
};

export default AddNewat;
