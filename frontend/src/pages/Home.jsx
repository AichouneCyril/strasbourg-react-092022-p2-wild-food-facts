import { Typography, Box } from "@mui/material";
import PropTypes from "prop-types";

import SearchBar from "../components/SearchBar";

export default function Home({
  query,
  setQuery,
  setData,
  setMenu,
  setOpenCard,
  setItem,
}) {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "2rem",
          paddingTop: 10,
          minHeight: "100vh",
          backgroundColor: "primary.main",
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: 300,
            textAlign: "center",
          }}
        >
          <Typography
            gutterBottom
            sx={{
              color: "primary.light",
              fontFamily: "Impact",
              lineHeight: 0.8,
              fontSize: 100,
            }}
          >
            WILD FOOD FACTS
          </Typography>
        </Box>

        <SearchBar
          setData={setData}
          setMenu={setMenu}
          query={query}
          setQuery={setQuery}
          setOpenCard={setOpenCard}
          setItem={setItem}
        />
      </Box>
    </div>
  );
}

Home.propTypes = {
  query: PropTypes.string.isRequired,
  setQuery: PropTypes.func.isRequired,
  setData: PropTypes.func.isRequired,
  setMenu: PropTypes.func,
  setOpenCard: PropTypes.func,
  setItem: PropTypes.func,
};

Home.defaultProps = {
  setMenu: null,
  setOpenCard: null,
  setItem: null,
};
