import { Container, Typography } from "@mui/material";
import { useMenu } from "../../../Hooks/useMenu.js";

function ManageMenu() {
  const { menu } = useMenu();
  return (
    <>
      <Container>
        {menu.map((item) => {
          return (
            <>
              <Typography key={item.id}>{item.name}</Typography>
            </>
          );
        })}
      </Container>
    </>
  );
}
export default ManageMenu;
