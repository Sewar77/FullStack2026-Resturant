import {
  Box,
  IconButton,
  ListItem,
  ListItemText,
  MenuItem,
  List,
  Typography,
} from "@mui/material";
import { UserContext } from "../../../Context/UserContext.jsx";
import { useContext } from "react";
function Sidebar({ toggleSidebar, open }) {
  const { user, logout } = useContext(UserContext);
  return (
    <>
      <Box
        sx={{
          p: 4,
          minHeight: "100vh",
          bgcolor: "LightSteelBlue",
          color: "black",
        }}
      >
        <IconButton
          onClick={toggleSidebar}
          sx={{
            color: "MidnightBlue",
            bgcolor: "MediumBlue",
          }}
        >
          <MenuItem />
        </IconButton>
        {open && <Typography sx={{ p: 3 }}>Hello, {user?.name}</Typography>}
        <List>
          <ListItem button>
            <ListItemText primary={open ? "Dashboard" : "D"} />
          </ListItem>
          {/* Condition render components */}
          {user?.role === "manager" && (
            <>
              <ListItem button>
                <ListItemText primary={open ? "Manage Menu" : "M"} />
              </ListItem>
              <ListItem button>
                <ListItemText primary={open ? "Manage Menu" : "M"} />
              </ListItem>
              <ListItem button>
                <ListItemText primary={open ? "Manage Menu" : "M"} />
              </ListItem>
              <ListItem button>
                <ListItemText primary={open ? "Manage Menu" : "M"} />
              </ListItem>
              <ListItem button>
                <ListItemText primary={open ? "Manage Menu" : "M"} />
              </ListItem>
              <ListItem button onClick={logout}>
                <ListItemText primary={open ? "Logout" : "L"} />
              </ListItem>
            </>
          )}
          {user?.role === "user" && (
            <>
              <ListItem button>
                <ListItemText primary={open ? "Manage Menu" : "M"} />
              </ListItem>
              <ListItem button>
                <ListItemText primary={open ? "Manage Menu" : "M"} />
              </ListItem>
              <ListItem button>
                <ListItemText primary={open ? "Manage Menu" : "M"} />
              </ListItem>
              <ListItem button>
                <ListItemText primary={open ? "Manage Menu" : "M"} />
              </ListItem>
              <ListItem button>
                <ListItemText primary={open ? "Manage Menu" : "M"} />
              </ListItem>
              <ListItem button>
                <ListItemText primary={open ? "Manage Menu" : "M"} />
              </ListItem>
            </>
          )}
        </List>
      </Box>
    </>
  );
}

export default Sidebar;
