import "./App.css";
import Register from "./components/Auth/Register.jsx";
import LandingPage from "./components/Landing/LandingPage.jsx";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login.jsx";
import MenuDetails from "./components/Menu/MenuDetails.jsx";
import Home from "./components/Home/Home.jsx";
import ManagerDashboard from "./components/Manager/ManagerDashboard.jsx";
import ManageUsers from "../src/components/Manager/ManageUsers/ManageUsers.jsx";
import ManageCategories from "../src/components/Manager/ManageCategories/ManageCategories.jsx";
import ProtectedRoutes from "./Routes/ProtectedRoutes.jsx";
import ManagerProtectRoutes from "./Routes/ManagerProtectedRoutes.jsx";
import UserProtectRoutes from "./Routes/UserProtectRoutes.jsx";
import Profile from "./components/Profile/Profile.jsx";
function App() {
  return (
    <>
      <Toaster position="top-center" />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/manager/dashboard"
          element={
            <ProtectedRoutes>
              <ManagerProtectRoutes>
                <ManagerDashboard />
              </ManagerProtectRoutes>
            </ProtectedRoutes>
          }
        />
        <Route
          path="/Manage-Users"
          element={
            <ProtectedRoutes>
              <ManagerProtectRoutes>
                <ManageUsers />
              </ManagerProtectRoutes>
            </ProtectedRoutes>
          }
        />
        <Route
          path="/Manage-Categories"
          element={
            <ProtectedRoutes>
              <ManagerProtectRoutes>
                <ManageCategories />
              </ManagerProtectRoutes>
            </ProtectedRoutes>
          }
        />

        <Route
          path="/user-home"
          element={
            <ProtectedRoutes>
              <UserProtectRoutes>
                <Home />
              </UserProtectRoutes>
            </ProtectedRoutes>
          }
        />
        <Route
          path="/menu-detail"
          element={
            <ProtectedRoutes>
              <UserProtectRoutes>
                <MenuDetails />
              </UserProtectRoutes>
            </ProtectedRoutes>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoutes>
              <Profile />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </>
  );
}

export default App;
