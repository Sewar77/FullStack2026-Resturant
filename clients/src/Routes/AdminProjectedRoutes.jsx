import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
function ManagerProtectRoutes({ children }) {
  const user = Cookies.get("refreshTokens");

  if (user.role !== "manager") {
    return <Navigate to="/login" replace />;
  }
  return children;
}

export default ManagerProtectRoutes;
