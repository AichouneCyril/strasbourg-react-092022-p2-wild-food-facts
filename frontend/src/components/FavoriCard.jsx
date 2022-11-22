import * as React from "react";
import PropTypes from "prop-types";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { Close } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function FavoriCard({ children, etatOpen, changeOpen }) {
  return (
    <SwipeableDrawer
      PaperProps={{
        elevation: 0,
        style: { borderRadius: "25px 25px 0 0" },
      }}
      anchor="left"
      open={etatOpen}
      onClose={() => changeOpen(false)}
      onOpen={() => changeOpen(true)}
    >
      <Close
        fontSize="large"
        color="primary"
        sx={{
          position: "absolute",
          right: "1rem",
          top: "1rem",
        }}
        onClick={() => changeOpen(false)}
      />

      <Box
        sx={{
          right: "75vh",
          paddingLeft: "0",
        }}
      >
        {children}
      </Box>
    </SwipeableDrawer>
  );
}

FavoriCard.propTypes = {
  children: PropTypes.node.isRequired,
  etatOpen: PropTypes.node.isRequired,
  changeOpen: PropTypes.node.isRequired,
};
