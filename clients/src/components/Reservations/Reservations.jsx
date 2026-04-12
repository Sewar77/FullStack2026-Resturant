import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useReservations } from "../../Hooks/useReservations";
import { useState } from "react";

function Reservations() {
  const { addNewReservations } = useReservations();

  const [reservation, setReservation] = useState({
    full_name: "",
    phone: "",
    email: "",
    guests_number: "",
    reservation_date: "",
    reservation_time: "",
    requests: "",
  });

  const handleChange = (field, value) => {
    setReservation((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleBook = () => {
    addNewReservations(reservation);
  };

  return (
    <Container>
      <Paper elevation={4} sx={{ p: 4 }}>
        <Typography variant="h4" mb={3}>
          Reserve Table
        </Typography>

        <Box display="flex" flexDirection="column" gap={3}>
          <TextField
            label="Full Name"
            onChange={(e) => handleChange("full_name", e.target.value)}
          />

          <TextField
            label="Phone"
            onChange={(e) => handleChange("phone", e.target.value)}
          />

          <TextField
            type="date"
            onChange={(e) => handleChange("reservation_date", e.target.value)}
          />

          <TextField
            type="time"
            onChange={(e) => handleChange("reservation_time", e.target.value)}
          />

          <TextField
            label="Email"
            onChange={(e) => handleChange("email", e.target.value)}
          />

          <TextField
            label="Guests"
            type="number"
            onChange={(e) => handleChange("guests_number", e.target.value)}
          />

          <TextField
            label="طلبات إضافية"
            onChange={(e) => handleChange("requests", e.target.value)}
          />

          <Button variant="contained" onClick={handleBook}>
            Book
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default Reservations;
