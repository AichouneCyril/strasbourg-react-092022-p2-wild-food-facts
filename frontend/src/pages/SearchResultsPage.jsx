import { Box } from "@mui/material";
import React from "react";
import FiltersList from "../components/Filters/FiltersList";
import PageCard from "../components/PageCard";
import ResultsList from "../components/results/ResultsList";

function SearchResultsPage() {
  return (
    <PageCard>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap=".5rem"
      >
        <input type="text" />
        <FiltersList />
        <ResultsList />
      </Box>
    </PageCard>
  );
}

export default SearchResultsPage;
