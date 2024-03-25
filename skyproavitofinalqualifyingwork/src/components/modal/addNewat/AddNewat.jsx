import React, { useState } from "react";
import styles from "./addNewat.module.css";
import {
  useCreateAdMutation,
  useCreateTextAdMutation,
} from "../../../store/api/advApi";
import ModalLayout from "../../modalLayout/ModalLayout";
import InputImage from "../../InputImage/InputImage";
import { useNavigate } from "react-router-dom";
const AddNewat = () => {
  const navigate = useNavigate();
  const [preview, setPreview] = useState(Array(5).fill(null));
  const [adData, setAdData] = useState({
    title: "",
    description: "",
    price: "",
    images: [],
  });
  const [createAd] = useCreateAdMutation();
  const [createTextAd] = useCreateTextAdMutation();
  const onImageChange = (event) => {
    if (adData.images.length === 5) {
      alert("Слишком много фото...");
      return;
    }
    const file = event.target.files?.[0];
    if (file) {
      setAdData({
        ...adData,
        images: [...adData.images, { id: adData.images.length, file }],
      });
      console.log(file);
      const url = URL.createObjectURL(file);
      console.log(url);
      const newPreview = [...preview];
      newPreview.splice(adData.images.length, 1, {
        url,
        id: adData.images.length,
      });
      setPreview(newPreview);
    }
  };
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
      createTextAd({ title, description, price })
        .unwrap()
        .then(() => {
          navigate(-1);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      const data = new FormData();
      for (const img of adData.images) {
        data.append("files", img.file);
      }
      createAd({ title, description, price, images: data })
        .unwrap()
        .then(() => {
          navigate(-1);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  const onDelete = (event, id) => {
    event.stopPropagation();
    const newPreview = [...preview];
    const img = newPreview.find((elem) => elem.id === id);

    const index = newPreview.indexOf(img);
    newPreview.splice(index, 1);
    newPreview.push(null);
    setPreview(newPreview);
    const newImages = adData.images.filter((elem) => elem.id !== id);
    setAdData({ ...adData, images: newImages });
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
        <InputImage
          preview={preview}
          onDelete={onDelete}
          onChange={onImageChange}
        />
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
