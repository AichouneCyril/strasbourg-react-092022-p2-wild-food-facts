import React from "react";
import { Box, Divider } from "@mui/material";
import ResultItem from "./ResultItem";

function ResultsList() {
  const results = [
    { id: 1, name: "Nutella", category: "Pâte à tartiner", nutriscore: "E" },
    {
      id: 2,
      name: "Chips au vinaigre",
      category: "Snacks",
      nutriscore: "D",
    },
    { id: 3, name: "Pain complet", category: "pains", nutriscore: "A" },
  ];

  return (
    <Box>
      {results &&
        results.map((item) => (
          <Box key={item.id}>
            <ResultItem
              name={item.name}
              category={item.category}
              nutriscore={item.nutriscore}
            />
            <Divider textAlign="center" />
          </Box>
        ))}
    </Box>
  );
}

export default ResultsList;
