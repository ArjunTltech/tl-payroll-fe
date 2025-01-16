import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuthStore from '../store/authStore';

const ProtectedRoute = ({ children, isLoginPage = false }) => {
  const { isAuth } = useAuthStore.getState();

  if (isAuth && isLoginPage) {
    return <Navigate to="/" replace />;
  }

  if (!isAuth && !isLoginPage) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
