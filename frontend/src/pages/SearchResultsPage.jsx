import { Box } from "@mui/material";
import React from "react";
import FiltersList from "../components/Filters/FiltersList";
import ResultsList from "../components/results/ResultsList";

function SearchResultsPage() {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap=".5rem">
      <input type="text" />
      <FiltersList />
      <ResultsList />
    </Box>
  );
}

export default SearchResultsPage;
