import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import { useAuth } from "../../Hooks/useAuth.js";
import Haeder from "../Shared/Header.jsx";
function Profile() {
  const { user, deleteUser } = useAuth();
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
              <TextField label="Name" disabled value={user.name} />
              <TextField label="Email" disabled value={user.email} />
              <Typography variant="body1">
                Register at: {user.created_at}
              </Typography>
              <Button variant="contained" onClick={() => handleEditProfile}>
                Edit
              </Button>
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
        <Button
          sx={{ m: 6 }}
          variant="contained"
          onClick={() => deleteUser(user.id)}
        >
          Delete Accound
        </Button>
      </Container>
    </>
  );
}

export default Profile;
