import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./components/main/Main";
import Article from "./components/article/Article";
import MyArticle from "./components/my-article/MyArticle";
import SellerProfile from "./components/seller-profile/SellerProfile";
import Profile from "./components/profile/Profile";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/article" element={<Article />}></Route>
      <Route path="/myArticle" element={<MyArticle />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
      <Route path="/seller-profile" element={<SellerProfile />}></Route>
    </Routes>
  );
};

export default AppRoutes;
