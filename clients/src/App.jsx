import "./App.css";
import Register from "./components/Auth/Register.jsx";
import LandingPage from "./components/Landing/LandingPage.jsx";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login.jsx";
import MenuDetails from "./components/Menu/MenuDetails.jsx";
import Home from "./components/Home/Home.jsx";
import ManagerDashboard from "./components/Manager/ManagerDashboard.jsx";
function App() {
  return (
    <>
      <Toaster position="top-center" />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/manager/dashboard" element={<ManagerDashboard />} />
        <Route path="/user-home" element={<Home />} />
        <Route path="/menu-detail" element={<MenuDetails />} />
      </Routes>
    </>
  );
}

export default App;
