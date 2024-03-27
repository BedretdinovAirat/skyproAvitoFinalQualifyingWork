import React, { useEffect, useState } from "react";
import styles from "./atclsetting.module.css";
import ModalLayout from "../../modalLayout/ModalLayout";
import InputImage from "../../InputImage/InputImage";
import { useParams } from "react-router-dom";
import {
  useAddImageMutation,
  useDeleteImgMutation,
  useEditAdMutation,
  useGetAdQuery,
} from "../../../store/api/advApi";
const AtclSettings = () => {
  const { id } = useParams();
  const { data } = useGetAdQuery({ id });
  const [deleteImg] = useDeleteImgMutation();
  const [addImage] = useAddImageMutation();
  const [editAd] = useEditAdMutation();
  const [editData, setEditData] = useState({
    title: "",
    description: "",
    price: "",
    images: [],
  });
  const [newImages, setNewImages] = useState([]);
  const [deleteImages, setDeleteImages] = useState([]);
  const [preview, setPreview] = useState(Array(5).fill(null));
  useEffect(() => {
    if (data) {
      setEditData({
        ...editData,
        title: data.title,
        description: data.description,
        price: data.price,
        images: data.images,
      });
      const newPreview = [...preview];
      data.images.forEach((img, index) => {
        newPreview.splice(index, 1, {
          url: `http://localhost:8090/${img.url}`,
          id: img.id,
        });
      });
      setPreview(newPreview);
    }
  }, [data]);
  const deleteFromPreview = (id) => {
    const newPreview = [...preview];
    const index = newPreview.findIndex((elem) => elem.id === id);
    newPreview.splice(index, 1);
    newPreview.push(null);
    setPreview(newPreview);
  };

  const deleteFromAddition = (id) => {
    const images = [...newImages];
    const index = images.findIndex((elem) => elem.id === id);
    if (index !== -1) {
      images.splice(index, 1);
      setNewImages(images);
    }
  };
  const onDelete = (event, id) => {
    event.stopPropagation();

    deleteFromPreview(id);
    deleteFromAddition(id);
    setEditData({
      ...editData,
      images: editData.images.filter((elem) => elem.id !== id),
    });

    const image = editData.images.find((elem) => elem.id === id);
    setDeleteImages([...deleteImages, image.url]);
  };
  const onChange = (event) => {
    const { name, value } = event.target;
    setEditData({ ...editData, [name]: value });
  };
  const onImageChange = (e) => {
    if (editData.images.length === 5) {
      alert("много фото");
      return;
    }
    const file = e.target.files?.[0];

    if (file) {
      const index = editData.images.length;
      const url = URL.createObjectURL(file);
      setEditData((prevData) => {
        return {
          ...prevData,
          images: [...prevData.images, { url, id: index }],
        };
      });

      setNewImages((prevImages) => {
        return [...prevImages, { file, id: index }];
      });

      setPreview((prevPreview) => {
        const newPreview = [...prevPreview];
        newPreview.splice(index, 1, { url, id: index });
        return newPreview;
      });
    }
  };
  const onClick = () => {
    if (!editData.title || !editData.description || !editData.price) {
      alert("Вы не заполнили поля");
      return;
    }
    editAd({
      title: editData.title,
      description: editData.description,
      price: editData.price,
      id,
    })
      .unwrap()
      .then(() => {
        if (deleteImages.length) {
          deleteImages.forEach((img) => deleteImg({ id, url: img }));
        }
        if (newImages.length) {
          newImages.forEach((img) => {
            const data = new FormData();
            data.append("file", img.file);
            addImage({ id, image: data });
          });
        }
      });
  };
  return (
    <ModalLayout>
      <form className={styles.modalFormNewArt} id="formNewArt" action="#">
        <div className={styles.formNewArtBlock}>
          <label for="name">Название</label>
          <input
            onChange={onChange}
            className={styles.formNewArtInput}
            type="text"
            name="title"
            id="formName"
            placeholder="Введите название"
            value={editData.title}
          />
        </div>
        <div className={styles.formNewArtBlock}>
          <label for="text">Описание</label>
          <textarea
            onChange={onChange}
            className={styles.formNewArtArea}
            name="description"
            id="formArea"
            cols="auto"
            rows="10"
            placeholder="Введите описание"
            value={editData.description}
          ></textarea>
        </div>
        <InputImage
          onChange={onImageChange}
          onDelete={onDelete}
          preview={preview}
        />
        <div className={styles.formNewArtBlock}>
          <label for="price">Цена</label>
          <input
            onChange={onChange}
            className={styles.formNewArtInputPrice}
            type="text"
            name="price"
            id="formName"
            value={editData.price}
          />
          <div className={styles.formNewArtInputPriceCover}></div>
        </div>

        <button
          type="button"
          onClick={onClick}
          className={styles.formNewArtBtnPub}
          id="btnPublish"
        >
          Сохранить
        </button>
      </form>
    </ModalLayout>
  );
};

export default AtclSettings;
