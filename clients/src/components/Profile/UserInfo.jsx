import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useAuth } from "../../Hooks/useAuth.js";
import Haeder from "../Shared/Header.jsx";
import { useState } from "react";
function UserInfo() {
  const { user, updateUserProfile } = useAuth();
  console.log(user);
  const [updatedUser, setUpdatedUser] = useState({});
  const [toggleForm, setToggleForm] = useState(false);
  const handleEditProfile = () => {
    setToggleForm(!toggleForm);
  };
  console.log("updatedUser", updatedUser);

  const handleSave = () => {
    updateUserProfile(updatedUser);
    console.log(updatedUser);

    setToggleForm(false);
  };

  return (
    <>
      <Typography variant="h1">{user.name} Profile</Typography>
      <Box sx={{ m: 3 }}>
        <Typography variant="h3">Update User Info</Typography>
        <Card
          sx={{
            textAlign: "center",
            alignContent: "center",
            m: 2,
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
              p: 2,
            }}
          >
            {toggleForm ? (
              <>
                <TextField
                  label="Name"
                  value={updatedUser.name}
                  onChange={(e) =>
                    setUpdatedUser({ ...updatedUser, name: e.target.value })
                  }
                />
                <TextField
                  label="Email"
                  value={updatedUser.email}
                  onChange={(e) =>
                    setUpdatedUser({ ...updatedUser, email: e.target.value })
                  }
                />
              </>
            ) : (
              <Box
                sx={{
                  textAlign: "left",
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                }}
              >
                <Typography variant="h3">Name: {user.name}</Typography>
                <Typography variant="h3">Email: {user.email}</Typography>
              </Box>
            )}
            <Typography variant="body1">
              Register at: {new Date(user.created_at).toLocaleString()}
            </Typography>
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: 4,
                textAlign: "center",
              }}
            >
              <Button
                variant="contained"
                onClick={handleEditProfile}
                color="warning"
              >
                {toggleForm ? "Cancel" : "Edit"}
              </Button>
              {toggleForm && (
                <Button
                  variant="contained"
                  color="success"
                  onClick={handleSave}
                >
                  Save
                </Button>
              )}
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}

export default UserInfo;
