import Sidebar from "../Shared/Sidebar/Sidebar";
import { useState } from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
function ManagerLayout() {
  const [open, setOpen] = useState(true);
  const toggleSideBar = () => {
    setOpen(!open);
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          minWidth: "25px",
          gap: 3,
        }}
      >
        <Sidebar toggleSidebar={toggleSideBar} open={open} />

        <Box sx={{ alignItems: "center", flexGrow: 1 }}>
          <Outlet />
        </Box>
      </Box>
    </>
  );
}
export default ManagerLayout;
