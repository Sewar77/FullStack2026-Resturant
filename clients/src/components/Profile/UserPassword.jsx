import { Box, Button, Card, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useAuth } from "../../Hooks/useAuth.js";
function UserPassword() {
  const { changeUserPassword } = useAuth();
  const [passwords, setPasswords] = useState({
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });
  const handleChangePassword = () => {
    changeUserPassword(passwords);
    setPasswords({
      oldPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    });
  };
  return (
    <>
      <Box sx={{ m: 3, mt: 4 }}>
        <Typography variant="h3">Update User Password</Typography>
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            justifyContent: "center",
            m: 3,
            p: 3,
          }}
        >
          <TextField
            type="password"
            label="Old Password"
            value={passwords.oldPassword}
            onChange={(e) =>
              setPasswords({ ...passwords, oldPassword: e.target.value })
            }
          />
          <TextField
            type="password"
            label="New Password"
            value={passwords.newPassword}
            onChange={(e) =>
              setPasswords({ ...passwords, newPassword: e.target.value })
            }
          />
          <TextField
            type="password"
            label="Confirm Old Password"
            value={passwords.confirmNewPassword}
            onChange={(e) =>
              setPasswords({ ...passwords, confirmNewPassword: e.target.value })
            }
          />
          <Button variant="contained" onClick={handleChangePassword}>
            Change
          </Button>
        </Card>
      </Box>
    </>
  );
}

export default UserPassword;
