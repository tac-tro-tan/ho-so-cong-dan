import React from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../user/apiCore";

const Admin3 = ({ children }) => {
    return isAuthenticated()?.role === 2
      ? children
      : <Navigate to='/signin' replace />;
  };

export default Admin3;
