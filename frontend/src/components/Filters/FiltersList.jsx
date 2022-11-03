import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@mui/material";
import FilterItem from "./FilterItem";

const container = {
  border: 2,
  borderColor: "primary.main",
  borderRadius: "10px",
  padding: ".5rem",
};

function FiltersList({ filters, setFilter }) {
  return (
    <Grid container sx={container}>
      {filters.map((item) => {
        return (
          <Grid key={item.name} item xs={6}>
            <FilterItem
              itemName={item.name}
              isActive={item.isActive}
              setFilter={setFilter}
            />
          </Grid>
        );
      })}
    </Grid>
  );
}

FiltersList.propTypes = {
  filters: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      isActive: PropTypes.bool.isRequired,
    })
  ).isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default FiltersList;
