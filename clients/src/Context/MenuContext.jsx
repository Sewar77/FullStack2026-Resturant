import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import api from "../api.js";

export const MenuContext = createContext();

export function MenuProvider({ children }) {
  const [menu, setMenu] = useState([]);

  const fetchMenu = async () => {
    try {
      const res = await api.get("/menu");
      if (res.data.menu.length === 0) {
        toast.success("No Menu Yet, Explore to find more.");
      }
      console.log(res);
      setMenu(res.data.menu);
      toast.success("Happy meal!");
    } catch (err) {
      toast.error("something went error");
    }
  };
  useEffect(() => {
    fetchMenu();
  }, []);
  return (
    <>
      <MenuContext.Provider value={{ menu }}>{children}</MenuContext.Provider>
    </>
  );
}
