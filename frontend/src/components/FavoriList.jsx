import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FiltersList from "./Filters/FiltersList";
import ResultsList from "./results/ResultsList";

function FavoriList() {
  return (
    <Box>
      <Typography
        sx={{
          width: "400px",
          color: "primary.main",
          fontSize: 40,
          paddingTop: 5,
          display: "flex",
          justifyContent: "center",
        }}
      >
        Vos Favoris
      </Typography>
      <FiltersList />
      <Box sx={{ align: "center" }}>
        <ResultsList />
        <ResultsList />
      </Box>
    </Box>
  );
}

export default FavoriList;
