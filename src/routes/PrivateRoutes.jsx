import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  // While checking the auth state (Firebase takes a moment)
  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-stone-500/40">
        <span className="loading loading-bars loading-xl"></span>
      </div>
    );
  }

  // If user is logged in, allow access
  if (user) {
    return children;
  }
  // Otherwise redirect to login, and remember where they tried to go
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoutes;
