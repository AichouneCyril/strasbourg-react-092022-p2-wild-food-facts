import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import CloseIcon from "@mui/icons-material/Close";
import Modal from "@mui/material/Modal";

import BarCodeScanner from "barcode-react-scanner";

const SearchStyle = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#F4F4F4",
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
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
  setItem = null,
}) {
  const [isScanning, setIsScanning] = React.useState(false);
  const [code, setCode] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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

  const handleCameraSearch = (barcode) => {
    axios
      .get(`https://world.openfoodfacts.org/api/v2/product/${barcode}`)
      .then((response) => {
        if (setMenu) setMenu("codebarsearch");
        if (setOpenCard) setOpenCard(true);
        if (setItem) setItem(response.data.product);
      })
      .catch((error) => {
        console.warn(error);
      });
  };

  useEffect(() => {
    if (code) handleCameraSearch(code);
  }, [code]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <SearchStyle
          sx={{
            color: "#6666",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingRight: ".5 rem",
          }}
        >
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

          <PhotoCameraIcon
            sx={{ color: "grey" }}
            onClick={() => setIsScanning(true)}
          />
        </SearchStyle>
      </form>

      <Modal
        open={isScanning}
        onClose={() => setIsScanning(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ borderRadius: "30px" }}
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          sx={{ minHeight: "100vh" }}
        >
          <CloseIcon
            sx={{ color: "white" }}
            fontSize="large"
            onClick={() => setIsScanning(false)}
          />
          <BarCodeScanner
            onUpdate={(err, resp) => {
              if (resp) {
                setCode(resp.getText());
                setIsScanning(false);
              }
            }}
          />
        </Box>
      </Modal>
    </Box>
  );
}

SearchBar.propTypes = {
  query: PropTypes.string.isRequired,
  setQuery: PropTypes.func.isRequired,
  setData: PropTypes.func.isRequired,
  setMenu: PropTypes.func,
  setOpenCard: PropTypes.func,
  setItem: PropTypes.func,
};

SearchBar.defaultProps = {
  setMenu: null,
  setOpenCard: null,
  setItem: null,
};
