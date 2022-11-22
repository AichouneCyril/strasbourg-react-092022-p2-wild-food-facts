import PropTypes from "prop-types";
import React from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Stack,
  Button,
} from "@mui/material";
import Box from "@mui/material/Box";

function CarouselCompare({ displayProduct, product }) {
  return (
    product && (
      <Stack
        direction="row"
        spacing={3}
        style={{ overflowX: "scroll", height: "100%", width: "100%" }}
        sx={{ margin: "25px" }}
      >
        {product.map((item) => (
          <Card
            key={item.id}
            item
            style={{ width: "100%", minWidth: "320px", maxHeight: "320px" }}
            sx={{ justifyContent: "center" }}
            className="DisplayItem"
            onClick={() => displayProduct(item.id)}
          >
            <CardHeader
              title={
                item.product_name ? item.product_name : "No Name Available"
              }
              variant="h1"
              sx={{ textAlign: "center" }}
            />
            <CardMedia
              sx={{ objectFit: "contain" }}
              height="80px"
              component="img"
              image={item.selected_images.front.small.fr}
              alt={item.generic_name}
            />
            <CardContent>
              <Box>
                <Stack direction="row" spacing={2}>
                  <Button
                    variant="text"
                    sx={{ bgcolor: "primary.main", color: "white" }}
                  >
                    Nutri score:{" "}
                    {item.nutriscore_grade ? item.nutriscore_grade : "None"}
                  </Button>
                  <Button sx={{ bgcolor: "primary.main", color: "white" }}>
                    Eco score:{" "}
                    {item.ecoscore_grade ? item.ecoscore_grade : "None"}
                  </Button>
                  <Button sx={{ bgcolor: "primary.main", color: "white" }}>
                    Nova score: {item.nova_group ? item.nova_group : "None"}
                  </Button>
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
  displayProduct: PropTypes.node.isRequired,
};

export default CarouselCompare;
