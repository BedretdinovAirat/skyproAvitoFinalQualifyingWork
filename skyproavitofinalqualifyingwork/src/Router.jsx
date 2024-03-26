import React from "react";
import { useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/main/Main";
import Article from "./pages/article/Article";
// import MyArticle from "./components/my-article/MyArticle";
import SellerProfile from "./pages/seller-profile/SellerProfile";
import Profile from "./pages/profile/Profile";
import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/signUp/SignUp";
import AddNewat from "./components/modal/addNewat/AddNewat";
import Layout from "./components/layout/Layout";
import AuthProvider from "./context/AuthProvider";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
import AtclSettings from "./components/modal/atclSettings/AtclSettings";
import Reviews from "./components/modal/reviews/Reviews";
import NotFound from "./pages/notFound/NotFound";
const AppRoutes = () => {
  const location = useLocation();
  const background = location && location.state?.background;
  return (
    <AuthProvider>
      <Layout>
        <Routes location={background || location}>
          <Route path="/" element={<Main />}>
            {/* <Route path="add" element={<AddNewat />} /> */}
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/article/:id/*" element={<Article />}>
              <Route path="edit" element={<AtclSettings />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route
              path="/seller-profile/:id"
              element={<SellerProfile />}
            ></Route>
          </Route>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {background && (
          <Routes>
            <Route element={<ProtectedRoute />}>
              <Route path="add" element={<AddNewat />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        )}
      </Layout>
    </AuthProvider>
  );
};

export default AppRoutes;
