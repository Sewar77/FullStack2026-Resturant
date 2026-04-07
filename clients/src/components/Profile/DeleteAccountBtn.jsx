import {
  Box,
  Button,
  Divider,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Hooks/useAuth";
import { useState } from "react";
function DeleteAccountBtn() {
  const navigate = useNavigate();
  const { user, deleteUser } = useAuth();
  console.log(user);
  const [open, setOpen] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [confirmed, setIsConfirmed] = useState("");
  const handleConfirm = () => {
    setConfirm(!confirm);
  };
  const handleClose = () => {
    setOpen(false);
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
      <Divider />
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
    </>
  );
}

export default DeleteAccountBtn;
