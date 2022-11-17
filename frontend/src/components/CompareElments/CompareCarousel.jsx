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
    product && (
      <Stack
        direction="row"
        spacing={3}
        style={{ overflowX: "scroll", height: "100%", width: "100%" }}
      >
        {product.map((item) => (
          <Card
            key={item.id}
            item
            style={{ width: "100%", minWidth: "310px" }}
            className="DisplayItem"
          >
            <CardHeader
              title={item.generic_name}
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
              image={item.image_url}
              alt={item.generic_name}
            />
            <CardContent>
              <Box>
                <Stack direction="row" spacing={2}>
                  <Button variant="text">
                    Nutri score: {item.nutriscore_grade}
                  </Button>
                  <Button>Eco score: {item.ecoscore_grade}</Button>
                  <Button>Nova score: {item.nova_group}</Button>
                </Stack>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Stack>
    )
  );
}

CarouselCompare.propTypes = {
  product: PropTypes.node.isRequired,
};

export default CarouselCompare;
