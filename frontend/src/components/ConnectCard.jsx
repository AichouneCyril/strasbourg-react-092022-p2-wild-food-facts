/* eslint-disable prettier/prettier */
import * as React from "react";
import PropTypes from "prop-types";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { Close } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function ConnectCard({ children, etatOpen, changeOpen }) {
  return (
    <SwipeableDrawer
      PaperProps={{
        elevation: 0,
        style: { backgroundColor: "white", borderRadius: "25px 25px 0 0" },
      }}
      anchor="right"
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
          left: "75vh",
          padding: "4rem 10rem",
        }}
      >
        {children}
      </Box>
    </SwipeableDrawer>
  );
}

ConnectCard.propTypes = {
  children: PropTypes.node.isRequired,
  etatOpen: PropTypes.node.isRequired,
  changeOpen: PropTypes.node.isRequired,
};
