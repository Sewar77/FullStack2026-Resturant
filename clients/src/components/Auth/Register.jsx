import { useState, createContext, useContext } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { UserContext } from "../../Context/UserContext.jsx";
function Register() {
  const { register } = useContext(UserContext);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    register(userData);
  };
  return (
    <>
      <Typography>Register</Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          label="Name"
          value={userData.name}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        ></TextField>
        <TextField
          label="Email"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        ></TextField>
        <TextField
          label="Password"
          value={userData.password}
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
        ></TextField>
        <Button type="submit">Register</Button>
      </Box>
    </>
  );
}
export default Register;
