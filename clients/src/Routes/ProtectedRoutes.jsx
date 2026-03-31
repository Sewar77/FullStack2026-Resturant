import { Navigate } from "react-router-dom";
import { Typography } from "@mui/material";
import { useAuth } from "../Hooks/useAuth.js";
function ProtectedRoutes({ children }) {
  const { user, loading } = useAuth();
  console.log("user from protected routes", user);
  if (loading) {
    return <Typography>loading...</Typography>;
  }
  if (!user) {
    return <Navigate to="/login" replace />;
  } //check the user general

  return children;
}

export default ProtectedRoutes;
