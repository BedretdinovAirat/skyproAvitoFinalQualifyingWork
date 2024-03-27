import React, { useState } from "react";
import "./sellerProfile.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import {
  useGetAdSellerQuery,
  useGetSellersQuery,
} from "../../store/api/advApi";

const SellerProfile = () => {
  const { id } = useParams();
  const [isPhoneVisible, setIsPhoneVisible] = useState(false);
  // const { data, error } = useGetSellersQuery();
  const { data: sellerAd } = useGetAdSellerQuery({ user_id: id });
  // const user = data?.find((seller) => seller.id === id);
  return (
    <>
      <main className="main">
        <div className="main__container">
          <div className="main__center-block">
            <div className="main__menu menu">
              <use className="menu__logo-link" href="" target="_blank">
                <img
                  className="menu__logo-img"
                  src="/img/logo.png"
                  alt="logo"
                />
              </use>
              <form className="menu__form" action="#">
                <Link to="/" className="menu__btn btn-hov02" id="btnGoBack">
                  Вернуться на&nbsp;главную
                </Link>
              </form>
            </div>

            <h2 className="main__h2">Профиль продавца</h2>

            <div className="main__profile-sell profile-sell">
              <div className="profile-sell__content">
                <div className="profile-sell__seller seller">
                  <div className="seller__left">
                    <div className="seller__img">
                      <img
                        src={
                          sellerAd?.[0].user.avatar
                            ? `http://localhost:8090/${sellerAd?.[0].user.avatar}`
                            : "/img/notImage.png"
                        }
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="seller__right">
                    <h3 className="seller__title">{sellerAd?.[0].user.name}</h3>
                    <p className="seller__city">{sellerAd?.[0].user.city}</p>
                    <p className="seller__inf">
                      {sellerAd?.[0].user.sells_from}
                    </p>

                    <div className="seller__img-mob-block">
                      <div className="seller__img-mob">
                        <use href="" target="_self">
                          <img src="#" alt="" />
                        </use>
                      </div>
                    </div>

                    <button
                      onClick={() => setIsPhoneVisible(!isPhoneVisible)}
                      className="seller__btn btn-hov02"
                    >
                      Показать&nbsp;телефон
                      <span>
                        {isPhoneVisible
                          ? sellerAd?.[0].user.phone
                          : `${sellerAd?.[0].user.phone.slice(0, 3)} XXX XX XX`}
                      </span>
                    </button>
                    {/* то же самое сделать с другими  */}
                  </div>
                </div>
              </div>
            </div>

            <h3 className="main__title">Товары продавца</h3>
          </div>
          <div className="main__content">
            <div className="content__cards cards">
              {sellerAd?.map((ad) => (
                <Link to={`/article/${ad.id}`}>
                  <div className="cards__item">
                    <div className="cards__card card">
                      <div className="card__image">
                        <use href="" target="_blank">
                          <img
                            src={
                              ad?.images?.[0]
                                ? `http://localhost:8090/${ad.images[0].url}`
                                : "/img/notImage.png"
                            }
                            alt=""
                          />
                        </use>
                      </div>
                      <div className="card__content">
                        <use href="" target="_blank">
                          <h3 className="card__title">{ad.title}</h3>
                        </use>
                        <p className="card__price">{ad?.price}</p>
                        <p className="card__place">{ad?.user.city}</p>
                        <p className="card__date">{ad?.created_on}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
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
    </>
  );
};

export default SellerProfile;
