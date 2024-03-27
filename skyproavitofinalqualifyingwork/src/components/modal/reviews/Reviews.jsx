import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ModalLayout from "../../modalLayout/ModalLayout";
import styles from "./reviews.module.css";
import {
  useGetAdReviewsQuery,
  usePostAdReviewsMutation,
} from "../../../store/api/advApi";
const Reviews = () => {
  const { id } = useParams();
  const { data, refetch } = useGetAdReviewsQuery({ id });
  const [postAdReviews] = usePostAdReviewsMutation();
  const [comment, setComment] = useState("");
  const onClick = () => {
    if (!comment || !comment.trim()) {
      alert("Незаполненные поля");
      return;
    }
    postAdReviews({ text: comment, id })
      .unwrap()
      .then(() => {
        alert("Отправлен");
        refetch();
        setComment("");
      });
  };

  return (
    <ModalLayout>
      <div className={styles.modalScroll}>
        <form className={styles.modalFormNewArt} id="formNewArt" action="#">
          <div className={styles.formNewArtBlock}>
            <label for="text">Добавить отзыв</label>
            <textarea
              onChange={(event) => setComment(event.target.value)}
              value={comment}
              className={styles.formNewArtArea}
              name="text"
              id="formArea"
              cols="auto"
              rows="5"
              placeholder="Введите описание"
            ></textarea>
          </div>
          <button
            onClick={onClick}
            type="button"
            className={styles.formNewArtBtnPub}
            id="btnPublish"
          >
            Опубликовать
          </button>
        </form>

        <div className={styles.modalReviews}>
          {data?.map((comment) => (
            <div className={styles.reviewsReview}>
              <div className={styles.reviewItem}>
                <div className={styles.reviewLeft}>
                  <div className={styles.reviewImg}>
                    <img src="" alt="" />
                  </div>
                </div>
                <div className={styles.reviewRight}>
                  <p className={styles.reviewName}>
                    {/* font-t */}
                    {comment?.author.name} <span>{comment?.created_on}</span>
                  </p>
                  <h5 className={styles.reviewTitle}>Комментарий</h5>
                  <p className="review__text font-t">{comment?.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ModalLayout>
  );
};

export default Reviews;
