import React from "react";
import "./signin.css";
const SignIn = () => {
  return (
    <div class="wrapper">
      <div class="container-enter">
        <div class="modal__block">
          <form class="modal__form-login" id="formLogIn" action="#">
            <div class="modal__logo">
              <img src="../img/logo_modal.png" alt="logo" />
            </div>
            <input
              class="modal__input login"
              type="text"
              name="login"
              id="formlogin"
              placeholder="email"
            />
            <input
              class="modal__input password"
              type="password"
              name="password"
              id="formpassword"
              placeholder="Пароль"
            />
            <button class="modal__btn-enter" id="btnEnter">
              <a href="../index.html">Войти</a>
            </button>
            <button class="modal__btn-signup" id="btnSignUp">
              <a href="signup.html">Зарегистрироваться</a>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
