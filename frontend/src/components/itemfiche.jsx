import PropTypes from "prop-types";
import React from "react";
import {
  styled,
  Typography,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  IconButton,
  Grid,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "green",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: "white",
}));

function ItemFiche({ product }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
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
          <CardActions disableSpacing>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
        </CardContent>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography
              paragraph
              sx={{
                backgroundColor: "green",
                color: "white",
                borderRadius: "10px",
                textAlign: "center",
              }}
            >
              Provance:{product.origins}
            </Typography>
            <Typography
              paragraph
              sx={{
                backgroundColor: "green",
                color: "white",
                borderRadius: "10px",
                textAlign: "center",
              }}
            >
              A Destination:{product.origins}
            </Typography>
            <Box sx={{ backgroundColor: "lightgrey", borderRadius: "10px" }}>
              <Typography
                sx={{ backgroundColor: "grey", borderRadius: "10px" }}
              >
                {" "}
                Ingredients:{" "}
              </Typography>
              <Typography paragraph>{product.ingredients_text}</Typography>
            </Box>
          </CardContent>
        </Collapse>
      </Card>
    )
  );
}

ItemFiche.propTypes = {
  product: PropTypes.node.isRequired,
};

export default ItemFiche;
