import { useState, useContext } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  Paper,
} from "@mui/material";
import { UserContext } from "../../Context/UserContext.jsx";

function Login() {
  const { login } = useContext(UserContext);

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);

    login(userData);
  };

  return (
    <Container maxWidth="sm">
      <Paper
        elevation={6}
        sx={{
          mt: 10,
          p: 5,
          borderRadius: 3,
        }}
      >
        <Typography variant="h4" textAlign="center" fontWeight="bold" mb={3}>
          Login
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          display="flex"
          flexDirection="column"
        >
          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />

          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            value={userData.password}
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
          />

          <Button
            type="submit"
            variant="contained"
            size="large"
            sx={{
              mt: 3,
              py: 1.5,
              fontWeight: "bold",
            }}
          >
            Login
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default Login;
