import { Button, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../../Context/UserContext";
function AddUserForm() {
  const { addUser } = useContext(UserContext);
  const [newUserForm, setNewUserForm] = useState({});
  const handleAddNewUser = () => {
    addUser(newUserForm);
    setNewUserForm({});
  };
  return (
    <>
      <Typography>open</Typography>
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 3,
          flexWrap: "wrap",
        }}
      >
        <TextField
          label="Name:"
          margin="normal"
          value={newUserForm.name}
          onChange={(e) =>
            setNewUserForm({ ...newUserForm, name: e.target.value })
          }
        />
        <TextField
          label="Email"
          type="email"
          margin="normal"
          value={newUserForm.email}
          onChange={(e) =>
            setNewUserForm({ ...newUserForm, email: e.target.value })
          }
        />
        <TextField
          label="password"
          type="password"
          margin="normal"
          value={newUserForm.password}
          onChange={(e) =>
            setNewUserForm({ ...newUserForm, password: e.target.value })
          }
        />
        <Button onClick={handleAddNewUser}>Add</Button>
      </Container>
    </>
  );
}

export default AddUserForm;
