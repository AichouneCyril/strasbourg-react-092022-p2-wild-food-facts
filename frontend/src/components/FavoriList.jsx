import { useState } from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ResultsList from "./results/ResultsList";

function FavoriList({ favorites, setFavorites }) {
  const [filtersList] = useState([
    { name: "Vegan", isActive: false },
    { name: "Ecoplus", isActive: false },
    { name: "Nutriplus", isActive: false },
    { name: "Bio", isActive: false },
    { name: "Halal", isActive: false },
  ]);

  return (
    <Box sx={{ padding: "1rem" }}>
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
      <ResultsList
        data={favorites}
        filters={filtersList}
        favorites={favorites}
        setFavorites={setFavorites}
      />
    </Box>
  );
}

FavoriList.propTypes = {
  favorites: PropTypes.arrayOf(PropTypes.obj).isRequired,
  setFavorites: PropTypes.func.isRequired,
};

export default FavoriList;
