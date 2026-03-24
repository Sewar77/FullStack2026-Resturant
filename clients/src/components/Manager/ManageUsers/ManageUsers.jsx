import {
  Box,
  Button,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Modal,
  Container,
} from "@mui/material";
import { UserContext } from "../../../Context/UserContext.jsx";
import { useContext, useEffect, useState } from "react";
import Search from "../../Shared/Search/Search.jsx";
function ManageUsers() {
  const { users, allUsers, deleteUser } = useContext(UserContext);
  useEffect(() => {
    allUsers();
  }, []);
  const [search, setSearch] = useState("");
  const filteredUsers = users.filter((user) => {
    return user.email.toLowerCase().includes(search.toLowerCase());
  });
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
  const [open, setOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const handleViewUser = (user) => {
    setOpen(true);
    setSelectedUser(user);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Container
        sx={{ alignItems: "center", width: "100%", alignContent: "center" }}
      >
        <Typography variant="h2">Manage Users</Typography>
        <Search
          search={search}
          setSearch={setSearch}
          label={"Search Emails..."}
        />
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
                        <Button onClick={() => handleViewUser(user)}>
                          View
                        </Button>
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
      </Container>
    </>
  );
}

export default ManageUsers;
