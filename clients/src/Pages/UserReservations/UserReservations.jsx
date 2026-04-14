import MyReservations from "../../components/Reservations/MyReservations.jsx";
import Header from "../../components/Shared/Header.jsx";
import Footer from "../../components/Shared/Footer.jsx";
import { Container } from "@mui/material";
function UserReservations() {
  return (
    <>
      <Header />
      <Container
        sx={{
          my: 4,
        }}
      >
        <MyReservations />
      </Container>
      <Footer />
    </>
  );
}

export default UserReservations;
