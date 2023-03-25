import React from "react"
import { useSelector } from "react-redux"
import { Navigate, Outlet, useLocation } from "react-router-dom"

const ProtectedRoute = () => {
  const { isAuthenticated, loading } = useSelector(state => state.auth);
  let location = useLocation();

  if(loading === false) {
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />
  }
}

export default ProtectedRoute;
