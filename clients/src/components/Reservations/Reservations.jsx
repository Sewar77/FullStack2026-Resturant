import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
function Reservations() {
  const floorNumber = [1, 2, 3, 4, 5];
  return (
    <>
      <Container>
        <Paper elevation={4}>
          <Typography
            variant="h1"
            sx={{
              my: 4,
            }}
          >
            Reserve Table
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
              justifyContent: "center",
            }}
          >
            <TextField label="Full Name" />
            <TextField label="Phone Number" type="number" />
            <TextField type="date" />
            <TextField label="Email" type="email" />
            <TextField label="Number of Guests" type="number" />
            <FormControl>
              <InputLabel>Floor Number</InputLabel>
              <Select>
                {floorNumber.map((floor) => {
                  return (
                    <>
                      <MenuItem>{floor}</MenuItem>
                    </>
                  );
                })}
              </Select>
            </FormControl>
            <Button variant="contained">Book</Button>
          </Box>
        </Paper>
      </Container>
    </>
  );
}
export default Reservations;
