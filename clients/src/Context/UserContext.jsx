import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import api from "../api.js"; // axios instance with withCredentials: true
import { useNavigate } from "react-router-dom";
export const UserContext = createContext();
export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const currentUser = async () => {
    try {
      const res = await api.get("/auth/me");
      setUser(res.data.me);
      console.log("from context", res.data.me);
    } catch (err) {
      console.log("not logged in");
      setUser(null);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    currentUser();
  }, []);
  const allUsers = async () => {
    try {
      const res = await api.get("/users");
      if (res.data.users.length === 0) {
        toast.success(res.data.message || "No users Yet");
      }
      // toast.success(res.data.message);
      setUsers(res.data.users);
      console.log(res.data.users);
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data?.message || "Something went wrong");
    }
  };
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
  const addUser = async (userData) => {
    try {
      if (!userData.name || !userData.email || !userData.password) {
        toast.error("All fields are required");
        return;
      }
      const res = await api.post("/auth/register", userData);
      await allUsers();
      toast.success("User Added Successfully Successful");
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
      console.log(res);

      if (res.data.user.role === "manager") navigate("/manager/dashboard");
      if (res.data.user.role === "user") navigate("/user-home");
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data?.message || "Login failed");
    }
  };
  const deleteUser = async (userId) => {
    try {
      const res = await api.delete(`/user/delete/${userId}`);
      toast.success(res.data.message || "deleted Successful");
      await allUsers();
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data?.message || "delete failed");
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
  const updateUserProfile = async (userData) => {
    try {
      if (!userData.name) {
        userData.name = user.name;
      }
      if (!userData.email) {
        userData.email = user.email;
      }
      const res = await api.put("/user/update-info", userData);
      toast.success(res.data.message);
      await currentUser();
    } catch (err) {
      console.log(err);
    }
  };
  const changeUserPassword = async (passwords) => {
    try {
      if (
        !passwords.oldPassword ||
        !passwords.newPassword ||
        !passwords.confirmNewPassword
      ) {
        toast.error("Please fill all required fields!");
        return;
      }
      if (passwords.newPassword !== passwords.confirmNewPassword) {
        toast.error("New Passwords must match!");
        return;
      }
      const res = await api.put("/user/change-password", passwords);
      toast.success(res.data.message || "Changed succeddfylly");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <UserContext.Provider
      value={{
        user,
        register,
        login,
        logout,
        users,
        allUsers,
        deleteUser,
        loading,
        currentUser,
        updateUserProfile,
        addUser,
        changeUserPassword,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
