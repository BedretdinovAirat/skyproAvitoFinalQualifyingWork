import React from "react";
import "./signin.css";
import { Link } from "react-router-dom";
import Wrapper from "../../components/wrapper/Wrapper";
const SignIn = () => {
  return (
    <Wrapper>
      <div class="container-enter">
        <div class="modal__block">
          <form class="modal__form-login" id="formLogIn" action="#">
            <Link to="/">
              <div class="modal__logo">
                <img src="../img/logo_modal.png" alt="logo" />
              </div>
            </Link>
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
              Войти
            </button>
            <button class="modal__btn-signup" id="btnSignUp">
              <Link to="/signup">Зарегистрироваться</Link>
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default SignIn;
