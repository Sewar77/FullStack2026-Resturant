import { useReservations } from "../../Hooks/useReservations";
import {
  Card,
  CardContent,
  Grid,
  Paper,
  Stack,
  Typography,
  Button,
  Container,
  ButtonBase,
} from "@mui/material";
function MyReservations() {
  const { userReservation, deleteReservation } = useReservations();
  console.log(userReservation);
  const handleCancel = (reservationId) => {}; //task!!!
  return (
    <>
      <Container>
        <Paper
          elevation={4}
          sx={{
            m: 4,
            p: 4,
          }}
        >
          <Typography variant="h2">My Reservations</Typography>

          <Grid
            container
            spacing={4}
            sx={{
              m: 4,
              p: 4,
            }}
          >
            {Array.from(userReservation).map((reservation, idx) => {
              return (
                <Grid size={6} key={reservation.id}>
                  <Card
                    sx={{
                      bgcolor: "#ebe3de",
                      borderRadius: 3,
                      color: "black",
                      textAlign: "left",
                    }}
                  >
                    <CardContent>
                      <Typography variant="h3">Res. # {idx + 1}</Typography>
                      <Typography
                        variant="h5"
                        color="error"
                        sx={{
                          p: 1,
                        }}
                      >
                        {reservation.status}
                      </Typography>
                      <Typography variant="h5">
                        Full Name: {reservation.full_name}
                      </Typography>
                      <Typography variant="h5">
                        Email: {reservation.email}
                      </Typography>
                      <Typography variant="h5">
                        Number of Guests: {reservation.guests_number}
                      </Typography>
                      <Typography variant="h6">
                        Date:
                        {new Date(
                          reservation.reservation_date
                        ).toLocaleDateString()}
                      </Typography>
                      <Typography variant="h6">
                        Time: {reservation.reservation_time}
                      </Typography>
                      <Typography variant="h6">
                        Client Notes:
                        {reservation.requests || "No Specil reuqests"}
                      </Typography>

                      <Button
                        variant="contained"
                        color="warning"
                        onClick={() => handleCancel(reservation.id)}
                      >
                        Cancel
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Paper>
      </Container>
    </>
  );
}

export default MyReservations;
