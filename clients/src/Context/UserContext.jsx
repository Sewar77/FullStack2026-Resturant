import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import api from "../api.js"; // axios instance with withCredentials: true
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const currentUser = async () => {
    try {
      const res = await api.get("/auth/me");
      setUser(res.data.me);
    } catch (err) {
      console.log("not logged in");
      setUser(null);
    }
  };

  useEffect(() => {
    currentUser();
  }, []);

  const register = async (userData) => {
    try {
      if (!userData.name || !userData.email || !userData.password) {
        toast.error("All fields are required");
        return;
      }
      const res = await api.post("/auth/register", userData);
      toast.success(res.data.message || "Registration Successful");
      navigate("/login");
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data?.message || "Something went wrong");
    }
  };

  const login = async (userData) => {
    try {
      if (!userData.email || !userData.password) {
        toast.error("All fields are required");
        return;
      }
      const res = await api.post("/auth/login", userData);
      toast.success(res.data.message || "Login Successful");
      await currentUser();
      if (user.role === "manager") navigate("/manager/dashboard");
      if (user.role === "user") navigate("/user-home");
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data?.message || "Login failed");
    }
  };

  const logout = async () => {
    try {
      await api.post("/auth/logout");
      setUser(null);
      toast.success("Logged out");
      navigate("/login");
    } catch (err) {
      console.log(err);
      toast.error("Logout failed");
    }
  };

  return (
    <UserContext.Provider value={{ user, register, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}
