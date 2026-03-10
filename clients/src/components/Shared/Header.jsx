import { AppBar, Button, Container, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  return (
    <>
      <AppBar position="sticky">
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
            <Button>Contact Us</Button>
            <Button>Reserve Noe</Button>
            <Button onClick={() => navigate("/login")}>Login</Button>
            <Button onClick={() => navigate("/register")}>Register</Button>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
}
export default Header;
