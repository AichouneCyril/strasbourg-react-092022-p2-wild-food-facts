import PropTypes from "prop-types";
import React from "react";
import {
  styled,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  IconButton,
  Grid,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import CompareCarousel from "./CompareCarousel";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "green",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: "white",
}));

function ItemFiche({ product }) {
  return (
    product && (
      <Card sx={{ maxWidth: "100%" }} className="DisplayItem">
        <CardHeader
          title={product.generic_name}
          variant="h1"
          sx={{ textAlign: "center" }}
        />
        <IconButton aria-label="add to favorites" sx={{}}>
          <FavoriteIcon />
        </IconButton>
        <CardMedia
          sx={{ objectFit: "contain" }}
          height="200px"
          component="img"
          image={product.image_url}
          alt={product.generic_name}
        />

        <CardContent>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <Item>Poid: {product.quantity}</Item>
              </Grid>
              <Grid item xs={3}>
                <Item>Nutri score: {product.nutriscore_grade}</Item>
              </Grid>
              <Grid item xs={3}>
                <Item>Eco score: {product.ecoscore_grade}</Item>
              </Grid>
              <Grid item xs={3}>
                <Item>Nova score: {product.nova_group}</Item>
              </Grid>
              <Grid item xs={3}>
                <Item>
                  {product.nutriments["energy-kcal_100g"]}{" "}
                  {product.nutriments["energy-kcal_unit"]}
                </Item>
              </Grid>
              <Grid item xs={3}>
                <Item>
                  Protein: {product.nutriments.proteins_100g}{" "}
                  {product.nutriments.proteins_unit}
                </Item>
              </Grid>
              <Grid item xs={3}>
                <Item>
                  Calcium: {product.nutriments.calcium_100g}{" "}
                  {product.nutriments.calcium_unit}
                </Item>
              </Grid>
              <Grid item xs={3}>
                <Item>
                  Fer: {product.nutriments.iron_100g}{" "}
                  {product.nutriments.iron_unit}
                </Item>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
        <CompareCarousel product={product} />
      </Card>
    )
  );
}

ItemFiche.propTypes = {
  product: PropTypes.node.isRequired,
};

export default ItemFiche;
