import React, { useState } from "react";
import "./signin.css";
import { Link } from "react-router-dom";
import { useSignUpMutation } from "../../store/api/userApi";
const SignIn = () => {
  const [signIn] = useSignUpMutation();
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
    if (!email || !password) {
      alert("error");
      return;
    }
    if (!email && !password) {
      alert("error");
      return;
    }
    signIn({ email, password });
  };
  return (
    <div className="container-enter">
      <div className="modal__block">
        <form className="modal__form-login" id="formLogIn" action="#">
          <Link to="/">
            <div className="modal__logo">
              <img src="../img/logo_modal.png" alt="logo" />
            </div>
          </Link>
          <input
            onChange={onChange}
            value={userData.login}
            className="modal__input login"
            type="text"
            name="login"
            id="formlogin"
            placeholder="email"
          />
          <input
            onChange={onChange}
            value={userData.password}
            className="modal__input password"
            type="password"
            name="password"
            id="formpassword"
            placeholder="Пароль"
          />
          <button className="modal__btn-enter" id="btnEnter">
            <Link to="/">Войти</Link>
          </button>
          <button className="modal__btn-signup" id="btnSignUp">
            <Link to="/signup">Зарегистрироваться</Link>
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
