import Header from "../../components/Shared/Header.jsx";
import Footer from "../../components/Shared/Footer.jsx";
import UserInfo from "../../components/Profile/UserInfo.jsx";
import UserPassword from "../../components/Profile/UserPassword.jsx";
import DeleteAccountBtn from "../../components/Profile/DeleteAccountBtn.jsx";
import { Container } from "@mui/material";
function UserProfile() {
  return (
    <>
      <Header />
      <Container
        sx={{
          my: 4,
        }}
      >
        <UserInfo />
        <UserPassword />
        <DeleteAccountBtn />
      </Container>
      <Footer />
    </>
  );
}

export default UserProfile;
