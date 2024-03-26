import React from "react";
// import { useAuth } from "../../context/useAuth";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
const ProtectedRoute = () => {
  const { isAuth } = useSelector((state) => state.user);
  if (!isAuth) {
    return <Navigate to="/signin" />;
  }
  // ok !
  return <Outlet />;
};

export default ProtectedRoute;
//  c 11 до 13 встреча.
