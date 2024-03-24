import { createContext, useState } from "react";
import { useDispatch } from "react-redux";
import { removeAuth, setAuth, setUserData } from "../store/slices/userSlice";
import { useLazyGetUserDataQuery } from "../store/api/userApi";
const initialState = {
  isAuth: false,
  login: () => {},
  logout: () => {},
};
export const AuthContext = createContext(initialState);

const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const [getUserData] = useLazyGetUserDataQuery();
  const [isAuth, setIsAuth] = useState(false);
  const login = ({ token }) => {
    setIsAuth(!isAuth);
    dispatch(setAuth({ isAuth: true, token }));
    localStorage.setItem("token", JSON.stringify(token));
    getUserData()
      .unwrap()
      .then((data) => {
        localStorage.setItem("user", JSON.stringify(data));
        dispatch(setUserData(data));
      });
  };
  const logout = () => {
    setIsAuth(false);
    dispatch(removeAuth());
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };
  return (
    <AuthContext.Provider value={{ isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
