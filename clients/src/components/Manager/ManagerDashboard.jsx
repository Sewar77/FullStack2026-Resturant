import Sidebar from "../Shared/Sidebar/Sidebar";
import { useState } from "react";
import { Box, Typography } from "@mui/material";
function ManagerDashboard() {
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

        <Box sx={{ alignItems: "center" }}>
          <Typography>manager dahsboadr</Typography>
        </Box>
      </Box>
    </>
  );
}
export default ManagerDashboard;
