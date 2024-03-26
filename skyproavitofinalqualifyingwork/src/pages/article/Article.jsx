import React, { useEffect, useState } from "react";
import "./article.css";
import {
  useDeleteAdMutation,
  useGetAdQuery,
  useGetAdReviewsQuery,
} from "../../store/api/advApi";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLocation, Outlet } from "react-router-dom";

const Article = () => {
  const { pathname } = useLocation();
  const { user } = useSelector((store) => store.user);
  const [preview, setPreview] = useState(null);
  const { id } = useParams();
  const { data } = useGetAdQuery({ id });
  const { data: comments } = useGetAdReviewsQuery({ id });
  const [deleteAd] = useDeleteAdMutation();
  let moment = require("moment");
  require("moment/locale/ru");

  const formattedDuration = moment
    .utc(data?.user.sells_from)
    .format("DD.MM.YYYY");

  function pluralizeReviews(numReviews) {
    if (numReviews % 100 >= 11 && numReviews % 100 <= 19) {
      return "отзывов";
    }

    switch (numReviews % 10) {
      case 1:
        return "отзыв";
      case 2:
      case 3:
      case 4:
        return "отзыва";
      default:
        return "отзывов";
    }
  }
  const onDelete = () => {
    deleteAd({ id });
  };
  useEffect(() => {
    if (data) {
      let preview = data.images.length
        ? `http://localhost:8090/${data.images?.[0].url}`
        : "/img/notImage.png";
      setPreview(preview);
    }
  }, [data]);

  return (
    <>
      <main className="main">
        <div className="main__container">
          <div className="main__menu menu">
            <use className="menu__logo-link" href="" target="_blank">
              <img className="menu__logo-img" src="/img/logo.png" alt="logo" />
            </use>
            <form className="menu__form" action="#">
              <Link to="/" className="menu__btn-serch btn-hov02">
                Вернуться на главную
              </Link>
            </form>
          </div>
        </div>

        <div className="main__artic artic">
          <div className="artic__content article">
            <div className="article__left">
              <div className="article__fill-img">
                <div className="article__img">
                  <img src={preview ?? "/img/notImage.png"} alt="" />
                </div>
                <div className="article__img-bar">
                  {data?.images.map((img) => (
                    <div
                      onClick={() =>
                        setPreview(`http://localhost:8090/${img?.url}`)
                      }
                      className="article__img-bar-div"
                    >
                      <img src={`http://localhost:8090/${img?.url}`} alt="" />
                    </div>
                  ))}
                </div>
                <div className="article__img-bar-mob img-bar-mob">
                  <div className="img-bar-mob__circle circle-active"></div>
                  <div className="img-bar-mob__circle"></div>
                  <div className="img-bar-mob__circle"></div>
                  <div className="img-bar-mob__circle"></div>
                  <div className="img-bar-mob__circle"></div>
                </div>
              </div>
            </div>
            <div className="article__right">
              <div className="article__block">
                <h3 className="article__title title">{data?.title}</h3>
                <div className="article__info">
                  <p className="article__date">{data?.created_on}</p>
                  <p className="article__city">{data?.user.city}</p>
                  <Link to={`${pathname}/reviews`}>
                    <p className="article__link" rel="">
                      {comments?.length} {pluralizeReviews(comments?.length)}
                    </p>
                  </Link>
                </div>
                <p className="article__price">{data?.price}</p>
                <div
                  style={{
                    dislpay: "flex",
                    gap: "10px",
                    flexDirection: "column",
                  }}
                >
                  <button className="article__btn btn-hov02">
                    Показать&nbsp;телефон
                    <span>{data?.user.phone}</span>
                  </button>
                  {user?.id === data?.user_id && (
                    <Link
                      className="article__btn btn-hov02"
                      to={`${pathname}/edit`}
                    >
                      Редактировать объявление
                    </Link>
                  )}
                  {/* 20:59 */}
                  {user?.id === data?.user_id && (
                    <button
                      className="article__btn btn-hov02"
                      onClick={onDelete}
                      type="button"
                    >
                      Снять с публикации
                    </button>
                  )}
                </div>
                <Link to={`/seller-profile/${data?.user_id}`}>
                  <div className="article__author author">
                    <div className="author__img">
                      <img
                        src={data?.user.avatar ?? "/img/notImage.png"}
                        alt=""
                      />
                    </div>
                    <div className="author__cont">
                      <p className="author__name">{data?.user.name}</p>
                      <p className="author__about">
                        Продает товары с {formattedDuration}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="main__container">
          <h3 className="main__title title">Описание товара</h3>
          <div className="main__content">
            <p className="main__text">{data?.description}</p>
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
      <Outlet />
    </>
  );
};

export default Article;
