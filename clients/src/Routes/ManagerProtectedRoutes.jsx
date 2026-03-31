import { Navigate } from "react-router-dom";
import { Typography } from "@mui/material";
import { useAuth } from "../Hooks/useAuth.js";
function ManagerProtectRoutes({ children }) {
  const { user, loading } = useAuth();
  console.log("user from manager prtocted routes", user);
  if (loading) {
    return <Typography>loading...</Typography>;
  }
  if (user.role !== "manager") {
    return <Navigate to="/login" replace />; //check on manager role
  }
  return children;
}

export default ManagerProtectRoutes;
