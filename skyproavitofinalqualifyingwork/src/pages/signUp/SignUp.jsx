import React from "react";
import "./signup.css";
import { Link } from "react-router-dom";
import Wrapper from "../../components/wrapper/Wrapper";
const SignUp = () => {
  return (
    <Wrapper>
      <div class="container-signup">
        <div class="modal__block">
          <form class="modal__form-login" id="formLogUp" action="#">
            <Link to="/">
              <div class="modal__logo">
                <img src="../img/logo_modal.png" alt="logo" />
              </div>
            </Link>
            <input
              class="modal__input login"
              type="text"
              name="login"
              id="loginReg"
              placeholder="email"
            />
            <input
              class="modal__input password-first"
              type="password"
              name="password"
              id="passwordFirst"
              placeholder="Пароль"
            />
            <input
              class="modal__input password-double"
              type="password"
              name="password"
              id="passwordSecond"
              placeholder="Повторите пароль"
            />
            <input
              class="modal__input first-name"
              type="text"
              name="first-name"
              id="first-name"
              placeholder="Имя (необязательно)"
            />
            <input
              class="modal__input first-last"
              type="text"
              name="first-last"
              id="first-last"
              placeholder="Фамилия (необязательно)"
            />
            <input
              class="modal__input city"
              type="text"
              name="city"
              id="city"
              placeholder="Город (необязательно)"
            />
            <button class="modal__btn-signup-ent" id="SignUpEnter">
              <a href="../index.html">Зарегистрироваться</a>
            </button>
            <button class="modal__btn-enter" id="btnEnter">
              <Link to="/signin">Войти</Link>
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default SignUp;
