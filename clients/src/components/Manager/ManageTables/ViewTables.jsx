import {
  Box,
  Button,
  ButtonBase,
  Card,
  CardContent,
  Container,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useTables } from "../../../Hooks/useTables.js";
import { useState } from "react";

function ViewTables() {
  const { tables, addNewTable, updateAvilability } = useTables();
  console.log("tables", tables);

  const [newTable, setNewTable] = useState({});

  const [isNewTable, setIsNewTable] = useState(false);
  console.log(tables);
  console.log(typeof tables);
  const handleOpenForm = () => {
    setIsNewTable(!isNewTable);
  };
  const handleAddNewTable = () => {
    console.log(newTable);
    addNewTable(newTable);
  };
  const handleChangeAvilability = (tableId) => {
    console.log(tableId);
    updateAvilability(tableId);
  };
  return (
    <>
      <Container>
        <Typography variant="h2">Tables</Typography>
        <Button
          variant="contained"
          onClick={handleOpenForm}
          sx={{
            p: 3,
            m: 4,
          }}
        >
          {isNewTable ? "Cancel" : "Add New Table"}
        </Button>

        {isNewTable && (
          <>
            <Paper elevation={4}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 5,
                  padding: 4,
                }}
              >
                <TextField
                  type="number"
                  label="Capacity of the table"
                  value={newTable.capacity}
                  onChange={(e) =>
                    setNewTable({ ...newTable, capacity: e.target.value })
                  }
                />
                <TextField
                  type="number"
                  label="Table Number"
                  value={newTable.table_number}
                  onChange={(e) =>
                    setNewTable({ ...newTable, table_number: e.target.value })
                  }
                />
                <TextField
                  type="number"
                  label="Table Number"
                  value={newTable.floor}
                  onChange={(e) =>
                    setNewTable({ ...newTable, floor: e.target.value })
                  }
                />
                <Button variant="contained" onClick={handleAddNewTable}>
                  Add
                </Button>
              </Box>
            </Paper>
          </>
        )}
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
            {Array.from(tables).map((table) => {
              return (
                <Grid size={6} key={table.id}>
                  <Card
                    sx={{
                      bgcolor: "#ebe3de",
                      borderRadius: 3,
                      color: "black",
                    }}
                  >
                    <CardContent
                      sx={{
                        p: 2,
                        m: 2,
                      }}
                    >
                      <Typography variant="h3">Table {table.id}</Typography>
                      <Typography>Number: {table.table_number}</Typography>
                      <Typography>Capacity: {table.capacity}</Typography>
                      <Typography>
                        Availability:
                        {table.isavailable ? "Available" : "Not Available"}
                      </Typography>
                      <Stack
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          gap: 4,
                          justifyContent: "space-between",
                          p: 3,
                          m: 3,
                        }}
                      >
                        <Button
                          variant="contained"
                          onClick={() => handleChangeAvilability(table.id)}
                        >
                          Avilable
                        </Button>
                        <Button variant="contained">Edit</Button>
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

export default ViewTables;
