import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useAuth } from "../../Hooks/useAuth.js";
import Haeder from "../Shared/Header.jsx";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
function Profile() {
  const navigate = useNavigate();
  const { user, deleteUser, updateUserProfile } = useAuth();
  console.log(user);

  const [updatedUser, setUpdatedUser] = useState({});
  const [toggleForm, setToggleForm] = useState(false);
  const [open, setOpen] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [confirmed, setIsConfirmed] = useState("");
  const handleConfirm = () => {
    setConfirm(!confirm);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleEditProfile = () => {
    setToggleForm(!toggleForm);
  };
  console.log("updatedUser", updatedUser);

  const handleSave = () => {
    updateUserProfile(updatedUser);
    console.log(updatedUser);

    setToggleForm(false);
  };
  const handleDeleteUser = () => {
    setOpen(true);
  };
  const handleDeleteUserFinal = (userid, confirm) => {
    if (confirm === "OK") {
      deleteUser(userid);
      toast.success("account deleted successfully");
      navigate("/");
      return;
    }
    setOpen(false);
    toast.error("Not Deleted");
  };
  return (
    <>
      <Haeder />
      <Typography variant="h1">{user.name} Profile</Typography>
      <Container>
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
        <Divider />
        <Box sx={{ m: 3, mt: 4 }}>
          <Typography variant="h3">Update User Password</Typography>
          <Card>
            <Typography variant="body1"></Typography>
          </Card>
        </Box>
        <Button sx={{ m: 6 }} variant="contained" onClick={handleDeleteUser}>
          Delete Account
        </Button>
        <Modal open={open} onClose={handleClose}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: 400,
              transform: "translate(-50%, -50%)",
              bgcolor: "white",
              color: "black",
              boxShadow: 10,
              p: 4,
              borderRadius: 2,
              textAlign: "center",
            }}
          >
            <Typography variant="h4">
              Are you sure you want to delete your account?
            </Typography>
            <Stack
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 5,
                m: 2,
              }}
            >
              <Button color="error" variant="contained" onClick={handleConfirm}>
                Delete
              </Button>
              <Button onClick={handleClose} color="info" variant="contained">
                Cancel
              </Button>
            </Stack>

            {confirm && (
              <Box>
                <Typography>Please Type Confirm:</Typography>
                <TextField
                  label="confirmation"
                  value={confirmed}
                  onChange={(e) => setIsConfirmed(e.target.value)}
                />
                <Button
                  onClick={() => handleDeleteUserFinal(user.userid, confirmed)}
                >
                  Ok
                </Button>
              </Box>
            )}
          </Box>
        </Modal>
      </Container>
    </>
  );
}

export default Profile;
