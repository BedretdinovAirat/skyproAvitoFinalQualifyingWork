import React from "react";
import { useAuth } from "../../context/useAuth";
import { Navigate, Outlet } from "react-router";
const ProtectedRoute = () => {
  const { isAuth } = useAuth();
  if (isAuth) {
    return <Navigate to="/signin" />;
  }
  // ok !
  return <Outlet />;
};

export default ProtectedRoute;
//  c 11 до 13 встреча.
