import { createContext, useState } from "react";

const initialState = {
  isAuth: false,
  login: () => {},
  logout: () => {},
};
export const AuthContext = createContext(initialState);

const AuthProvider = ({ children }) => {
  const { isAuth, setIsAuth } = useState(false);
  const login = ({ token }) => {
    setIsAuth(!isAuth);
    localStorage.setItem("token", JSON.stringify(token));
  };
  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("token");
  };
  return (
    <AuthContext.Provider value={{ isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
