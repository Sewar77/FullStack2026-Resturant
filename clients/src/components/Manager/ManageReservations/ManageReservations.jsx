import {
  Card,
  CardContent,
  Grid,
  Paper,
  Stack,
  Typography,
  Button,
  Container,
} from "@mui/material";
import { useReservations } from "../../../Hooks/useReservations";
function ManageReservations() {
  const { reservations, rejectReservation } = useReservations();
  console.log(reservations);
  const handleRejectReservation = (reservationId) => {
    rejectReservation(reservationId);
  };
  return (
    <>
      <Container>
        <Typography variant="Reservations">Reservations</Typography>
        <Paper
          elevation={4}
          sx={{
            m: 4,
            p: 4,
          }}
        >
          <Grid
            container
            spacing={4}
            sx={{
              m: 4,
              p: 4,
            }}
          >
            {Array.from(reservations).map((reservation, idx) => {
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
                      <Typography variant="h6">
                        State : {reservation.status}
                      </Typography>

                      <Stack
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                          p: 2,
                        }}
                      >
                        <Button variant="contained">Accept</Button>
                        <Button
                          variant="contained"
                          onClick={() =>
                            handleRejectReservation(reservation.id)
                          }
                        >
                          Reject
                        </Button>
                      </Stack>
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
export default ManageReservations;
