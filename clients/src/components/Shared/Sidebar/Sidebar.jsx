import {
  Box,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../Hooks/useAuth";
function Sidebar({ toggleSidebar, open }) {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  return (
    <Box
      sx={{
        p: 3,
        minHeight: "100vh",
        width: open ? 220 : 80,
        bgcolor: "background.paper",
        transition: "0.3s",
        borderRight: "1px solid #eee",
      }}
    >
      {/* TOGGLE BUTTON */}
      <IconButton onClick={toggleSidebar} sx={{ mb: 2 }}>
        <MenuIcon />
      </IconButton>

      {/* USER NAME */}
      {open && (
        <Typography sx={{ mb: 3, fontWeight: "bold" }}>
          Hello, {user?.name}
        </Typography>
      )}

      <List>
        {/* DASHBOARD */}
        <ListItemButton onClick={() => navigate("/manager/dashboard")}>
          <ListItemText primary={open ? "Dashboard" : "D"} />
        </ListItemButton>

        {/* MANAGER */}
        {user?.role === "manager" && (
          <>
            <ListItemButton onClick={() => navigate("/manager/menu")}>
              <ListItemText primary={open ? "Manage Menu" : "M"} />
            </ListItemButton>
            <ListItemButton onClick={() => navigate("/manager/users")}>
              <ListItemText primary={open ? "Users" : "U"} />
            </ListItemButton>
            <ListItemButton onClick={() => navigate("/manager/caregories")}>
              <ListItemText primary={open ? "Categories" : "C"} />
            </ListItemButton>
            <ListItemButton onClick={() => navigate("/manager/tables")}>
              <ListItemText primary={open ? "Tables" : "T"} />
            </ListItemButton>
            <ListItemButton onClick={() => navigate("/manager/reservation")}>
              <ListItemText primary={open ? "Reservationsrs" : "R"} />
            </ListItemButton>
            <ListItemButton onClick={logout}>
              <ListItemText primary={open ? "Logout" : "L"} />
            </ListItemButton>
          </>
        )}

        {/* USER */}
        {user?.role === "user" && (
          <>
            <ListItemButton onClick={() => navigate("/menu")}>
              <ListItemText primary={open ? "Menu" : "M"} />
            </ListItemButton>

            <ListItemButton onClick={() => navigate("/cart")}>
              <ListItemText primary={open ? "Cart" : "C"} />
            </ListItemButton>

            <ListItemButton onClick={() => navigate("/orders")}>
              <ListItemText primary={open ? "Orders" : "O"} />
            </ListItemButton>

            <ListItemButton onClick={logout}>
              <ListItemText primary={open ? "Logout" : "L"} />
            </ListItemButton>
          </>
        )}
      </List>
    </Box>
  );
}

export default Sidebar;
