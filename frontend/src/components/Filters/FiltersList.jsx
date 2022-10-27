import { Grid } from "@mui/material";
import React from "react";
import FilterItem from "./FilterItem";

const filters = ["Vegan", "Ecoscore", "Bio", "Halal", "Sans Gluten"];

const container = {
  border: 2,
  borderColor: "primary.main",
  borderRadius: "10px",
  padding: ".5rem",
};

function FiltersList() {
  return (
    <Grid container sx={container}>
      {filters.map((item) => {
        return (
          <Grid key={item} item xs={6}>
            <FilterItem itemName={item} />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default FiltersList;
