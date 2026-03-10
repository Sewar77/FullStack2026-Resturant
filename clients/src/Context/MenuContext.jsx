import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";
import api from "../api.js";

export const MenuContext = createContext();

export function MenuProvider({ children }) {
  const [menu, setMenu] = useState({});

  const allMenu = async () => {
    try {
      const res = await api.get("/menu");
      if (res.data.menu.length === 0) {
        toast.success("No Menu Yet, Explore to find more.");
      }
      setMenu(res.data.menu);
      toast.success("Happy meal!");
    } catch (err) {
      toast.error("something went error");
    }
  };
  return (
    <>
      <MenuContext.Provider value={{ allMenu, menu }}>
        {children}
      </MenuContext.Provider>
    </>
  );
}
