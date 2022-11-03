import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Box, Divider } from "@mui/material";
import ResultItem from "./ResultItem";
import data from "./data.json";

function ResultsList({ filters }) {
  const [activeFilters, setActiveFilters] = useState([]);
  const [results, setResults] = useState(data.products);

  // setting the activefilters depending on the state of filters
  useEffect(() => {
    filters.forEach((filter) => {
      if (filter.isActive && !activeFilters.includes(filter.name))
        setActiveFilters((prev) => [...prev, filter.name]);
      else if (!filter.isActive)
        setActiveFilters((prev) => prev.filter((item) => item !== filter.name));
    });
  }, [filters]);

  const veganFilter = (dataparam) => {
    setResults(
      dataparam.filter((result) => result["_keywords"].includes("vegan"))
    );
  };

  const ecoFilter = (dataparam) => {
    setResults(dataparam.filter((result) => result.ecoscore_grade === "a"));
  };

  const nutriFilter = (dataparam) => {
    setResults(dataparam.filter((result) => result.nutriscore_grade === "a"));
  };

  const bioFilter = (dataparam) => {
    setResults(
      dataparam.filter(
        (result) =>
          result["_keywords"].includes("organic") ||
          result["_keywords"].includes("biologique")
      )
    );
  };

  // filtering the data depending on the activeFilters array
  useEffect(() => {
    if (activeFilters.length === 0) setResults(data.products);
    if (activeFilters.includes("Vegan")) veganFilter(results);
    // filtre eco
    if (activeFilters.includes("Ecoplus")) ecoFilter(results);
    if (activeFilters.includes("Nutriplus")) nutriFilter(results);
    if (activeFilters.includes("Bio")) bioFilter(results);
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
