import { Navigate } from "react-router-dom";
import { userAuth } from "../Context/UserContext.jsx";
import { Typography } from "@mui/material";

function UserProtectRoutes({ children }) {
  const { user, loading } = userAuth();
  console.log("user from user prtocted routes", user);
  if (loading) {
    return <Typography>loading...</Typography>;
  }
  if (user.role !== "user") {
    return <Navigate to="/login" replace />; //check user role
  }
  return children;
}

export default UserProtectRoutes;
