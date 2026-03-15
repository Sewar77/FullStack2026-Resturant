import { useLocation } from "react-router-dom";
import { Container, Box, Typography } from "@mui/material";
import { Image } from "mui-image";
import Header from "../Shared/Header.jsx";
import Footer from "../Shared/Footer";
function MenuDetails() {
  const location = useLocation();
  const { item } = location.state || "";
  console.log(item);
  return (
    <>
      <Header />
      <Container sx={{ p: 6, textAlign: "center", alignItems: "center" }}>
        <Image src={item.image} width={500} height="300" showLoading />
        <Typography variant="h2">{item.name}</Typography>
        <Typography variant="body1">{item.description}</Typography>
      </Container>
      <Footer />
    </>
  );
}

export default MenuDetails;
