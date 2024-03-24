import React, { useState } from "react";
import "./signup.css";
import { Link } from "react-router-dom";
import { useSignUpMutation } from "../../store/api/userApi";
const SignUp = () => {
  const [signUp] = useSignUpMutation();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    repitPassword: "",
    name: "",
    surname: "",
    city: "",
    phone: "",
  });
  const onChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };
  const onClick = () => {
    const { email, password, repitPassword, name, surname, city, phone } =
      userData;
    if (!email || !password || !repitPassword || !name) {
      alert("idi");
      return;
    }
    if (password !== repitPassword) {
      alert("dont ok");
      return;
    }
    signUp({ email, password, name, surname, city, phone });
  };
  return (
    <div className="container-signup">
      <div className="modal__block">
        <form className="modal__form-login" id="formLogUp" action="#">
          <Link to="/">
            <div className="modal__logo">
              <img src="../img/logo_modal.png" alt="logo" />
            </div>
          </Link>
          <input
            onChange={onChange}
            value={userData.email}
            className="modal__input login"
            type="text"
            name="email"
            id="loginReg"
            placeholder="email"
          />
          <input
            onChange={onChange}
            value={userData.password}
            className="modal__input password-first"
            type="password"
            name="password"
            id="passwordFirst"
            placeholder="Пароль"
          />
          <input
            onChange={onChange}
            value={userData.repitPassword}
            className="modal__input password-double"
            type="password"
            name="repitPassword"
            id="passwordSecond"
            placeholder="Повторите пароль"
          />
          <input
            onChange={onChange}
            value={userData.name}
            className="modal__input first-name"
            type="text"
            name="name"
            id="first-name"
            placeholder="Имя (необязательно)"
          />
          <input
            onChange={onChange}
            value={userData.surname}
            className="modal__input first-last"
            type="text"
            name="surname"
            id="first-last"
            placeholder="Фамилия (необязательно)"
          />
          <input
            onChange={onChange}
            value={userData.city}
            className="modal__input city"
            type="text"
            name="city"
            id="city"
            placeholder="Город (необязательно)"
          />
          <input
            onChange={onChange}
            value={userData.phone}
            className="modal__input city"
            type="tel"
            name="phone"
            id="city"
            placeholder="номер (необязательно)"
          />
          <button
            onClick={onClick}
            type="button"
            className="modal__btn-signup-ent"
            id="SignUpEnter"
          >
            <Link to="/">Зарегистрироваться</Link>
          </button>
          <button className="modal__btn-enter" id="btnEnter">
            <Link to="/signin">Войти</Link>
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
