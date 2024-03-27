import React, { useEffect, useRef, useState } from "react";
import "./profile.css";
import { Link } from "react-router-dom";
import { useGetMyAdQuery } from "../../store/api/advApi";
import { useSelector } from "react-redux";
import {
  useChangeAvatarMutation,
  useUpdateUserInfoMutation,
} from "../../store/api/userApi";

const Profile = () => {
  const ref = useRef(null);
  const [updateUser] = useUpdateUserInfoMutation();
  const [changeAvatar] = useChangeAvatarMutation();
  const [avatar, setAvatar] = useState("");
  const [userData, setUserData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    city: "",
    avatar: "",
  });
  const { data } = useGetMyAdQuery();
  const { user } = useSelector((store) => store.user);
  const onChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };
  const onClick = () => {
    const { name, surname, city, phone } = userData;
    updateUser({ name, surname, city, phone })
      .unwrap()
      .then(() => alert("Данные обновились"));
  };
  const handleAvatar = () => {
    const file = new FormData();
    file.append("file", avatar);
    changeAvatar({ file })
      .unwrap()
      .then(() => alert("АВАТАРКА ПОМЕНЯЛАСЬ"));
  };
  useEffect(() => {
    if (user) {
      setUserData({
        ...userData,
        name: user.name,
        surname: user.surname,
        email: user.email,
        city: user.city,
        phone: user.phone,
        avatar: user.avatar
          ? `http://localhost:8090/${user.avatar}`
          : "/img/notImage.png",
      });
    }
  }, [user]);

  useEffect(() => {
    if (avatar) {
      const url = URL.createObjectURL(avatar);
      setUserData({ ...userData, avatar: url });
    }
  }, [avatar]);
  const onChangeAvatar = (event) => {
    const file = event.target.files[0];
    setAvatar(file);
  };
  return (
    <>
      <main className="main">
        <div className="main__container">
          <div className="main__center-block">
            <div className="main__menu menu">
              <use className="menu__logo-link" href="" target="_blank">
                <img className="menu__logo-img" src="img/logo.png" alt="logo" />
              </use>
              <form className="menu__form" action="#">
                <Link to="/" className="menu__btn btn-hov02">
                  Вернуться на&nbsp;главную
                </Link>
              </form>
            </div>

            <h2 className="main__h2">
              Здравствуйте, {(userData?.name || user?.email) ?? "пользователь"}
            </h2>

            <div className="main__profile profile">
              <div className="profile__content">
                <h3 className="profile__title title">Настройки профиля</h3>
                <div className="profile__settings settings">
                  <div className="settings__left">
                    <div className="settings__img">
                      <input
                        style={{ display: "none" }}
                        type="file"
                        ref={ref}
                        onChange={onChangeAvatar}
                      />
                      <img
                        src={userData.avatar ?? "/img/notImage.png"}
                        onClick={() => ref.current?.click()}
                        alt=""
                      />
                    </div>
                    <button
                      onClick={handleAvatar}
                      className="settings__change-photo"
                      href=""
                      type="button"
                      target="_self"
                    >
                      Заменить
                    </button>
                  </div>
                  <div className="settings__right">
                    <form className="settings__form" action="#">
                      <div className="settings__div">
                        <label for="fname">Имя</label>
                        <input
                          onChange={onChange}
                          className="settings__f-name"
                          id="settings-fname"
                          name="name"
                          type="text"
                          value={userData?.name}
                          placeholder=""
                        />
                      </div>

                      <div className="settings__div">
                        <label for="lname">Фамилия</label>
                        <input
                          onChange={onChange}
                          className="settings__l-name"
                          id="settings-lname"
                          name="surname"
                          type="text"
                          value={userData?.surname}
                          placeholder=""
                        />
                      </div>

                      <div className="settings__div">
                        <label for="city">Город</label>
                        <input
                          onChange={onChange}
                          className="settings__city"
                          id="settings-city"
                          name="city"
                          type="text"
                          value={userData?.city}
                          placeholder=""
                        />
                      </div>

                      <div className="settings__div">
                        <label for="phone">Телефон</label>
                        <input
                          onChange={onChange}
                          className="settings__phone"
                          id="settings-phone"
                          name="phone"
                          type="tel"
                          value={userData?.phone}
                          placeholder="+79161234567"
                        />
                      </div>

                      <button
                        onClick={onClick}
                        type="button"
                        className="settings__btn btn-hov02"
                        id="settings-btn"
                      >
                        Сохранить
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="main__title title">Мои товары</h3>
          </div>
          <div className="main__content">
            <div className="content__cards cards">
              {data?.map((ad) => (
                <div className="cards__item">
                  <div className="cards__card card">
                    <div className="card__image">
                      <use href="" target="_blank">
                        <img
                          src={`http://localhost:8090/${ad?.images[0]?.url}`}
                          alt=""
                        />
                      </use>
                    </div>
                    <div className="card__content">
                      <use href="" target="_blank">
                        <h3 className="card__title">{ad?.title}</h3>
                      </use>
                      <p className="card__price">{ad?.price}</p>
                      <p className="card__place">{ad?.user.city}</p>
                      <p className="card__date">{ad?.created_on}</p>
                    </div>
                  </div>
                </div>
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

export default Profile;
