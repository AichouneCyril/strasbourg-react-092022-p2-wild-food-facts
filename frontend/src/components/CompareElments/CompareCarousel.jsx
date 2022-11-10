import PropTypes from "prop-types";
import React from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  IconButton,
  Stack,
  Button,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Box from "@mui/material/Box";

function CarouselCompare({ product }) {
  return (
    <Stack
      direction="row"
      spacing={3}
      style={{ overflowX: "scroll", height: "100%", width: "100%" }}
    >
      {[...Array(24).keys()].map((value) => (
        <Card
          key={value}
          item
          style={{ width: "100%", minWidth: "310px" }}
          className="DisplayItem"
        >
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
            <Box>
              <Stack direction="row" spacing={2}>
                <Button variant="text">
                  Nutri score: {product.nutriscore_grade}
                </Button>
                <Button>Eco score: {product.ecoscore_grade}</Button>
                <Button>Nova score: {product.nova_group}</Button>
              </Stack>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Stack>
  );
}

CarouselCompare.propTypes = {
  product: PropTypes.node.isRequired,
};

export default CarouselCompare;
