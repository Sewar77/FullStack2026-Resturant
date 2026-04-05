import { AppBar, Button, Box, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Hooks/useAuth";
function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  return (
    <>
      <AppBar position="fixed">
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 5,
          }}
        >
          <Typography variant="h3">Resturant</Typography>
          <Box sx={{ display: "flex", gap: 3 }}>
            <Button onClick={() => navigate("/user-home")}>Home</Button>
            <Button>Menu</Button>
            <Button>Contact Us</Button>
            <Button>Reserve Now</Button>
            {user ? (
              <>
                <Button>Dashboard</Button>
                <Button onClick={() => navigate("/profile")}>Profile</Button>
                <Button onClick={logout}>Logout</Button>
              </>
            ) : (
              <>
                <Button onClick={() => navigate("/login")}>Login</Button>
                <Button onClick={() => navigate("/register")}>Register</Button>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
export default Header;
//home, dashboard, contact us, ordered now => backend and front end in user dashboard => next time 7/4/2026
