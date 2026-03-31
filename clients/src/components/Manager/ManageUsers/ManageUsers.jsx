import { Typography, Container, Button, Box } from "@mui/material";
import Header from "../../Shared/Header.jsx";
import { UserContext } from "../../../Context/UserContext.jsx";
import { useContext, useEffect, useState } from "react";
import Search from "../../Shared/Search/Search.jsx";
import UsersTable from "./UsersTable.jsx";
import AddUserForm from "./AddUserForm.jsx";
function ManageUsers() {
  const { allUsers } = useContext(UserContext);
  useEffect(() => {
    allUsers();
  }, []);
  const [search, setSearch] = useState("");
  const [userForm, setUserForm] = useState(false);
  const handleOpenUserForm = () => {
    setUserForm(!userForm);
  };
  return (
    <>
      <Header />
      <Container
        sx={{
          alignItems: "center",
          width: "100%",
          alignContent: "center",
          mt: 3,
        }}
      >
        <Typography variant="h2">Manage Users</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <Search
            search={search}
            setSearch={setSearch}
            label={"Search Emails..."}
          />
          <Button onClick={handleOpenUserForm} variant="contained">
            {userForm ? "Cancel" : "Add New User"}
          </Button>
        </Box>
        {userForm && <AddUserForm />}
        <UsersTable search={search} />
      </Container>
    </>
  );
}
export default ManageUsers;
