import React, { useEffect, useState } from "react";
import "./signin.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/useAuth";
import { useSignInMutation } from "../../store/api/authApi";
const SignIn = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [signIn, error] = useSignInMutation();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const onChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };
  const onClick = () => {
    const { email, password } = userData;
    if (!email || !password) {
      alert("error");
      return;
    }
    signIn({ email, password })
      .unwrap()
      .then((data) => {
        navigate("/");
        login({ token: data });
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    console.log(error?.error);
  }, [error]);
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
            name="email"
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
          <button
            type="button"
            onClick={onClick}
            className="modal__btn-enter"
            id="btnEnter"
          >
            Войти
          </button>
          <p>{(error?.error && error?.error) ?? "что-то пошло не так"}</p>
          <button className="modal__btn-signup" id="btnSignUp">
            <Link to="/signup">Зарегистрироваться</Link>
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
