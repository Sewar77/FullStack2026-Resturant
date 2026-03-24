import { Stack, TextField } from "@mui/material";

function Search({ search, setSearch, label }) {
  return (
    <>
      <Stack direction="row" spacing={2} sx={{ my: 2 }}>
        <TextField
          label={label}
          value={search}
          sx={{ width: 500 }}
          onChange={(e) => setSearch(e.target.value)}
        ></TextField>
      </Stack>
    </>
  );
}
export default Search;
