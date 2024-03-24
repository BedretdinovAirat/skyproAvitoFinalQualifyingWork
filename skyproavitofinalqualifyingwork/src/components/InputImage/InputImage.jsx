import React, { useRef } from "react";
import styles from "./inputImage.module.css";
// перенестии стили
const InputImage = ({ preview, onChange, onDelete }) => {
  const ref = useRef(null);
  const handleOnChange = (event) => {
    onChange(event);
    ref.current.value = "";
  };
  const onClick = () => {
    ref.current.click();
  };
  return (
    <div className={styles.formNewArtBlock}>
      <p className={styles.formNewArtP}>
        Фотографии товара<span>не более 5 фотографий</span>
      </p>
      <div onClick={onClick} className={styles.formNewArtBarImg}>
        <input onChange={handleOnChange} ref={ref} type="file" />
        {preview?.map((img) => (
          <>
            <div className={styles.formNewArtImg}>
              {img && (
                <>
                  <button onDelete={onDelete} type="button">
                    X
                  </button>
                  <img src={img.url} alt="" />
                </>
              )}
              <div className={styles.formNewArtImgCover}></div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default InputImage;
