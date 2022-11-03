import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Box, Divider } from "@mui/material";
import ResultItem from "./ResultItem";
import data from "./data.json";

function ResultsList({ filters }) {
  const [activeFilters, setActiveFilters] = useState([]);

  useEffect(() => {
    filters.forEach((filter) => {
      if (filter.isActive === true)
        setActiveFilters([...activeFilters, filter.name]);
    });
  }, [filters]);

  const results = data.products;

  useEffect(() => {
    console.log("change");
    // results.filter(
    //   (result) =>
    //     activeFilters.includes("vegan") || result["_keywords"].includes("vegan")
    // );
    // .filter(
    //   (result) =>
    //     !onlyEcoPlus ||
    //     result.ecoscore_grade === "a" ||
    //     result.ecoscore_grade === "b")
  }, [activeFilters]);

  return (
    <Box>
      {results &&
        results.map((item) => (
          <Box key={item.id}>
            <ResultItem
              name={item.product_name}
              image={item.selected_images.front.small.fr}
              category={item.category_properties["ciqual_food_name:fr"]}
              nutriscore={item.nutriscore_grade.toUpperCase()}
            />
            <Divider textAlign="center" />
          </Box>
        ))}
    </Box>
  );
}

ResultsList.propTypes = {
  filters: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      isActive: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default ResultsList;
