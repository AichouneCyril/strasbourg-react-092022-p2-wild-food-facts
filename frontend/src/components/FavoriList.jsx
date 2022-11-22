import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function FavoriList() {
  return (
    <Box>
      <Typography
        sx={{
          width: "300px",
          color: "primary.main",
          fontSize: 40,
          paddingTop: 5,
          display: "flex",
          justifyContent: "center",
        }}
      >
        Vos Favoris
      </Typography>
    </Box>
  );
}

export default FavoriList;
