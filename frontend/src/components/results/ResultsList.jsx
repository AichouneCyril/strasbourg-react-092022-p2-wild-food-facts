import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Box, Divider } from "@mui/material";
import ResultItem from "./ResultItem";
// import data from "./data.json";
import ItemFiche from "../itemfiche";
import CompareCarousel from "../CompareElments/CompareCarousel";

function ResultsList({ filters, data }) {
  const [activeFilters, setActiveFilters] = useState([]);
  const [results, setResults] = useState([]);
  const [productDisplayedId, setDisplayedProductId] = useState(null);

  useEffect(() => {
    if (productDisplayedId) {
      const newData = [];
      // eslint-disable-next-line array-callback-return
      data.filter((product) => {
        if (productDisplayedId === product.id) {
          newData.push(product);
        }
      });
      // eslint-disable-next-line array-callback-return
      data.map((product) => {
        // eslint-disable-next-line no-unused-expressions, eqeqeq
        productDisplayedId != product.id ? newData.push(product) : "";
      });
      setResults(newData);
    } else {
      setResults(data);
    }
  }, [data, productDisplayedId]);

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
      // eslint-disable-next-line dot-notation
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
          // eslint-disable-next-line dot-notation
          result["_keywords"].includes("organic") ||
          // eslint-disable-next-line dot-notation
          result["_keywords"].includes("biologique")
      )
    );
  };

  // filtering the data depending on the activeFilters array
  useEffect(() => {
    if (activeFilters.length === 0) setResults(data);
    if (activeFilters.includes("Vegan")) veganFilter(results);
    // filtre eco
    if (activeFilters.includes("Ecoplus")) ecoFilter(results);
    if (activeFilters.includes("Nutriplus")) nutriFilter(results);
    if (activeFilters.includes("Bio")) bioFilter(results);
  }, [activeFilters]);

  const getProductInformations = (id) => {
    const info = results.filter((result) => Number(result.id) === Number(id));
    return info[0];
  };

  const handleDisplayProduct = (id) => {
    console.warn(id);
    getProductInformations(id);
    setDisplayedProductId(id);
  };

  return (
    <Box sx={{ maxWidth: "100vw" }}>
      {productDisplayedId && (
        <>
          <ItemFiche product={getProductInformations(productDisplayedId)} />
          <CompareCarousel
            displayProduct={handleDisplayProduct}
            product={results.slice(1, 23)}
          />
        </>
      )}
      {!productDisplayedId &&
        results &&
        results.map((item) => (
          <Box key={item.id}>
            <ResultItem
              name={item.product_name}
              id={item.id}
              image={item.selected_images.front.small.fr}
              category={item.category_properties["ciqual_food_name:fr"]}
              nutriscore={item.nutriscore_grade.toUpperCase()}
              displayProduct={handleDisplayProduct}
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
  data: PropTypes.arrayOf(PropTypes.obj).isRequired,
};

export default ResultsList;
