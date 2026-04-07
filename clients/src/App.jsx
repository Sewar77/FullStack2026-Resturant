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
<<<<<<< HEAD
import UserProfile from "./Pages/Profile/Profile.jsx";
import ManagerLayout from "./components/Manager/ManagerLayout.jsx";
import ManageMenu from "./components/Manager/ManageMenu/ManageMenu.jsx";
=======
import Profile from "./components/Profile/Profile.jsx";
import Reservations from "./components/Reservations/Reservations.jsx";
>>>>>>> 2cdaf56a2dd2b10b74b9f6a751433e524d5a48ca
function App() {
  return (
    <>
      <Toaster position="top-center" />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* manager routes */}
        <Route
          path="/manager"
          element={
            <ProtectedRoutes>
              <ManagerProtectRoutes>
                <ManagerLayout />
              </ManagerProtectRoutes>
            </ProtectedRoutes>
          }
        >
          <Route path="users" element={<ManageUsers />} />
          <Route path="caregories" element={<ManageCategories />} />
          <Route path="dashboard" element={<ManagerDashboard />} />
          <Route path="menu" element={<ManageMenu />} />
        </Route>
        {/* user routes */}
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
          path="/reservations"
          element={
            <ProtectedRoutes>
              <UserProtectRoutes>
                <Reservations />
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
              <UserProfile />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </>
  );
}

export default App;
