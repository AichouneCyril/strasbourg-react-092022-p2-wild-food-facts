import * as React from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const SearchStyle = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#F4F4F4",
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function SearchBar({
  query,
  setQuery,
  setData,
  setMenu = null,
  setOpenCard = null,
}) {
  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData();
    if (setMenu) setMenu("search");
    if (setOpenCard) setOpenCard(true);
    axios
      .get(
        `https://fr.openfoodfacts.org/cgi/search.pl?action=process&tagtype_0=categories&tag_contains_0=contains&tag_0=${query}&json=1`
      )
      .then((response) => {
        setData(response.data.products);
      })
      .catch((error) => {
        console.warn(error);
      });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <SearchStyle>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Recherche ..."
            onChange={handleChange}
            value={query}
            inputProps={{ "aria-label": "search" }}
            sx={{ color: "#6666" }}
          />
        </SearchStyle>
      </form>
    </Box>
  );
}

SearchBar.propTypes = {
  query: PropTypes.string.isRequired,
  setQuery: PropTypes.func.isRequired,
  setData: PropTypes.func.isRequired,
  setMenu: PropTypes.func,
  setOpenCard: PropTypes.func,
};

SearchBar.defaultProps = {
  setMenu: null,
  setOpenCard: null,
};
