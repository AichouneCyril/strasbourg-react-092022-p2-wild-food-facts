import { useState } from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { Close } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function SwipeableTemporaryDrawer({ children }) {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <SwipeableDrawer
      sx={{
        borderRadius: "25px",
      }}
      anchor="bottom"
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Close
        fontSize="large"
        color="primary"
        sx={{
          position: "absolute",
          right: "0",
        }}
        onClick={handleClose}
      />

      <Box
        sx={{
          minHeight: "85vh",
          padding: "2rem 1rem",
        }}
      >
        {children}
      </Box>
    </SwipeableDrawer>
  );
}
