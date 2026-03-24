import { Navigate } from "react-router-dom";
import { userAuth } from "../Context/UserContext.jsx";
import { Typography } from "@mui/material";

function ManagerProtectRoutes({ children }) {
  const { user, loading } = userAuth();
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
