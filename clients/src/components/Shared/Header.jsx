import { AppBar, Button, Box, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Hooks/useAuth";
function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          mb: 5,
        }}
      >
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
            {user && user.role === "user" && (
              <>
                <Button onClick={() => navigate("/user-home")}>Home</Button>
                <Button>Menu</Button>
                <Button>Contact Us</Button>
                <Button>Reserve Now</Button>
                <Button>Dashboard</Button>
                <Button onClick={() => navigate("/profile")}>Profile</Button>
                <Button onClick={logout}>Logout</Button>
              </>
            )}

            {user && user.role === "manager" && (
              <>
                <Button>Messages</Button>
                <Button>Reservations</Button>
                <Button onClick={() => navigate("/profile")}>Profile</Button>
                <Button onClick={logout}>Logout</Button>
              </>
            )}
            {!user && (
              <>
                <Button onClick={() => navigate("/")}>Home</Button>
                <Button onClick={() => navigate("/login")}>Login</Button>
                <Button onClick={() => navigate("/register")}>Register</Button>
                <Button onClick={() => navigate("/contact-us")}>
                  Contact Us
                </Button>
                <Button onClick={() => navigate("/login")}>Reserve Now</Button>
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
