import { AppBar, Button, Container, Toolbar, Typography } from "@mui/material";
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
            minWidth: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 5,
          }}
        >
          <Typography variant="h3">Resturant</Typography>
          <Container sx={{ display: "flex", gap: 3 }}>
            <Button>Home</Button>
            <Button>Menu</Button>
            <Button>Dashboard</Button>
            <Button>Profile</Button>
            <Button>Contact Us</Button>
            <Button>Reserve Noe</Button>
            {user ? (
              <Button onClick={logout}>Logout</Button>
            ) : (
              <>
                <Button onClick={() => navigate("/login")}>Login</Button>
                <Button onClick={() => navigate("/register")}>Register</Button>
              </>
            )}
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
}
export default Header;
