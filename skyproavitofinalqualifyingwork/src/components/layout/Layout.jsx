import React from "react";
import styles from "./layout.module.css";
import Wrapper from "../wrapper/Wrapper";
import Header from "../header/Header";
const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
};

export default Layout;
