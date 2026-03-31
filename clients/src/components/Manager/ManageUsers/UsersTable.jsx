import {
  Box,
  Button,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Modal,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useAuth } from "../../../Hooks/useAuth.js";
function UsersTable({ search }) {
  const { users, deleteUser } = useAuth();
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const [selectedUser, setSelectedUser] = useState(null);
  const filteredUsers = users.filter((user) => {
    return user.email.toLowerCase().includes(search.toLowerCase());
  });
  const handleViewUser = (user) => {
    setOpen(true);
    setSelectedUser(user);
  };
  const styles = {
    table: {
      mt: 10,
      textAlign: "center",
    },
    header: {
      fontWeight: "bold",
      fontSize: "30px",
      color: "white",
    },
    action: {
      direction: "row",
      spacing: 1,
      justifyContent: "center",
    },
  };
  return (
    <>
      <Box>
        <Table sx={styles.table}>
          <TableHead>
            <TableRow>
              <TableCell sx={styles.header}>#</TableCell>
              <TableCell sx={styles.header}>Name</TableCell>
              <TableCell sx={styles.header}>Email</TableCell>
              <TableCell sx={styles.header}>Role</TableCell>
              <TableCell sx={styles.header}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredUsers.map((user, idx) => {
              return (
                <TableRow key={user.userid}>
                  <TableCell>{idx + 1}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>
                    <Stack sx={styles.action}>
                      <Button onClick={() => deleteUser(user.userid)}>
                        Delete
                      </Button>
                      <Button onClick={() => handleViewUser(user)}>View</Button>
                    </Stack>
                  </TableCell>
                </TableRow>
              );
            })}
            {filteredUsers.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  No Match Found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Box>
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
          }}
        >
          {selectedUser && (
            <>
              <Typography>Name:{selectedUser.name}</Typography>
              <Typography>Email:{selectedUser.email}</Typography>
              <Typography>
                Register At:
                {new Date(selectedUser.created_at).toLocaleString()}
              </Typography>
              <Typography>Role:{selectedUser.role}</Typography>
            </>
          )}
          <Button onClick={handleClose}>Close</Button>
        </Box>
      </Modal>
    </>
  );
}
export default UsersTable;
