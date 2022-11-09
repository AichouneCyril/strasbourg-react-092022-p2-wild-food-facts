import React, { useState } from "react";
import { Box } from "@mui/material";
import FiltersList from "../components/Filters/FiltersList";
import ResultsList from "../components/results/ResultsList";
import Search from "../components/Search";

function SearchResultsPage({ data, setData }) {
  const [filtersList, setFiltersList] = useState([
    { name: "Vegan", isActive: false },
    { name: "Ecoplus", isActive: false },
    { name: "Nutriplus", isActive: false },
    { name: "Bio", isActive: false },
    { name: "Halal", isActive: false },
  ]);

  const handleFilter = (name) => {
    const newState = filtersList.map((filter) => {
      if (filter.name === name)
        return { ...filter, isActive: !filter.isActive };
      return filter;
    });
    setFiltersList(newState);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap=".5rem">
      <Search setData={setData} />
      <FiltersList filters={filtersList} setFilter={handleFilter} />
      <ResultsList data={data} filters={filtersList} />
    </Box>
  );
}

export default SearchResultsPage;
