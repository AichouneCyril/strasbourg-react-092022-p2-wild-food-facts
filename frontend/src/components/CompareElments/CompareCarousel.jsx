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
      <Grid>
        <Grid item xs={4}>
          <Grid
            container
            display="flex"
            justifyContent="space-between"
            padding="15px"
          >
            {[0, 1, 2].map((value) => (
              <Grid key={value} item>
                <Card sx={{ maxWidth: "1" }} className="DisplayItem">
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
                    height="100px"
                    component="img"
                    image={product.image_url}
                    alt={product.generic_name}
                  />

                  <CardContent>
                    <Box>
                      <Grid container spacing={1} justifyContent="center">
                        <Grid item xs={4}>
                          <Item>Nutri score: {product.nutriscore_grade}</Item>
                        </Grid>
                        <Grid item xs={4}>
                          <Item>Eco score: {product.ecoscore_grade}</Item>
                        </Grid>
                        <Grid item xs={4}>
                          <Item>Nova score: {product.nova_group}</Item>
                        </Grid>
                      </Grid>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    )
  );
}

ItemFiche.propTypes = {
  product: PropTypes.node.isRequired,
};

export default ItemFiche;
