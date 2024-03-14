import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/main/Main";
import Article from "./pages/article/Article";
// import MyArticle from "./components/my-article/MyArticle";
import SellerProfile from "./pages/seller-profile/SellerProfile";
import Profile from "./pages/profile/Profile";
import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/signUp/SignUp";
import AddNewat from "./components/modal/addNewat/AddNewat";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path="add" element={<AddNewat/>}/>
      </Route>
      <Route path="/article/:id/*" element={<Article />}>
        <Route path="edit" />
        <Route path="reviews" />
      </Route>
      <Route path="/profile" element={<Profile />}></Route>
      <Route path="/seller-profile" element={<SellerProfile />}></Route>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export default AppRoutes;
