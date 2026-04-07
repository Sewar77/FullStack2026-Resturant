import {
  Button,
  Card,
  CardContent,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import { useCategories } from "../../../Hooks/useCategories.js";
import Header from "../../Shared/Header";
function ManageCategories() {
  const { categories, addNewCategory } = useCategories();
  console.log(categories);
  return (
    <>
      <Header />
      <Typography variant="h2">Manage Categories</Typography>
      <Button variant="contained" sx={{ m: 3 }}>
        Add New Category
      </Button>
      <Container
        sx={{
          alignItems: "center",
          width: "100%",
          alignContent: "center",
          mt: 3,
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 4,
          justifyContent: "space-evenly",
        }}
      >
        {categories.map((category) => {
          return (
            <Card key={category.id}>
              <CardContent>
                <Typography variant="h3">{category.name}</Typography>
                <Typography variant="body1">{category.description}</Typography>
                <Stack
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 3,
                    justifyContent: "space-between",
                    m: 3,
                  }}
                >
                  <Button variant="contained" color="info">
                    Delete
                  </Button>
                  <Button variant="contained" color="error">
                    Edit
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          );
        })}
      </Container>
    </>
  );
}
export default ManageCategories;
