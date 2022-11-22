import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
// import {
//   Brightness1Icon,
//   FavoriteBorderIcon,
//   FavoriteIcon,
// } from "@mui/icons-material";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import notavailable from "../../assets/notavailable.jpeg";

function ResultItem({
  name,
  id,
  image = notavailable,
  category,
  nutriscore,
  displayProduct,
  favorites,
  setFavorites,
}) {
  const [isFavorite, setIsFavorite] = useState(
    favorites.filter((favorite) => favorite.id === id).length !== 0
  );
  const handleClick = () => {
    if (!isFavorite) {
      axios
        .get(`https://world.openfoodfacts.org/api/v2/product/${id}`)
        .then((response) => {
          setFavorites([...favorites, response.data.product]);
          setIsFavorite(true);
        })
        .catch((error) => {
          console.warn(error);
        });
    }

    if (isFavorite) {
      setFavorites(favorites.filter((favorite) => favorite.id !== id));
      setIsFavorite(false);
    }
  };

  const getNutriScoreColor = (score) => {
    if (score === "A") return "green";
    if (score === "B") return "green";
    if (score === "C") return "green";
    if (score === "D") return "gold";
    if (score === "E") return "red";
    return "grey";
  };

  const nutriStyle = { color: getNutriScoreColor(nutriscore) };

  return (
    <Card
      sx={{
        boxShadow: "none",
        minHeight: "100px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: ".5rem",
        marginBottom: "1rem",
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        gap=".5rem"
        onClick={() => displayProduct(id)}
        sx={{ width: "100%", cursor: "pointer" }}
      >
        <CardMedia
          component="img"
          height="100px"
          sx={{ width: "8rem", borderRadius: "20px" }}
          image={image}
          alt="Product"
        />
        <CardContent
          sx={{
            padding: ".3rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "end",
          }}
        >
          <Typography variant="h3">{name}</Typography>
          <Typography variant="h5" color="grey">
            {category}
          </Typography>
          <Box display="flex" alignItems="center" gap=".5rem">
            <Brightness1Icon fontSize="xs" sx={nutriStyle} />
            <Typography variant="h5">Nutri-score : {nutriscore}</Typography>
          </Box>
        </CardContent>
      </Box>
      {isFavorite ? (
        <FavoriteIcon
          onClick={handleClick}
          fontSize="large"
          sx={{ color: "primary.main" }}
        />
      ) : (
        <FavoriteBorderIcon
          onClick={handleClick}
          fontSize="large"
          sx={{ color: "primary.main" }}
        />
      )}
    </Card>
  );
}

ResultItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  nutriscore: PropTypes.string,
  displayProduct: PropTypes.func.isRequired,
  favorites: PropTypes.arrayOf(PropTypes.obj).isRequired,
  setFavorites: PropTypes.func.isRequired,
};

ResultItem.defaultProps = {
  nutriscore: "Z",
};

export default ResultItem;
