import { useContext } from "react";
import { MenuContext } from "../../Context/MenuContext.jsx";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import Header from "../Shared/Header.jsx";
import { useNavigate } from "react-router-dom";

function Home() {
  const { menu, getMenuItem } = useContext(MenuContext);
  const navigate = useNavigate();
  const handleViewDetails = (item) => {
    getMenuItem(item.menuid);
    console.log("item: ", item);
    navigate("/menu-detail", {
      state: {
        item,
      },
    });
  };
  console.log(menu);

  return (
    <>
      <Header />
      <Box
        display="flex"
        flexWrap="wrap"
        gap={3}
        justifyContent="center"
        mt={4}
      >
        {menu.map((item) => {
          return (
            <Card key={item.menuid} sx={{ width: 300 }}>
              <CardMedia
                component="img"
                height="180"
                image={item.image}
                alt={item.name}
              />

              <CardHeader title={item.name} />

              <CardContent>
                <Typography variant="body2">{item.description}</Typography>

                <Typography variant="h6" fontWeight="bold" mt={1}>
                  {item.price}
                </Typography>
                <Stack direction="row">
                  <Button>Add To Cart</Button>
                  <Button onClick={() => handleViewDetails(item)}>
                    View Details
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          );
        })}
      </Box>
    </>
  );
}

export default Home;

//best practice || clean code
