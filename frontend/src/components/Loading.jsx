/* eslint-disable react/jsx-no-bind */
import { useState } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import Box from "@mui/material/Box";

export default function LoadingButtonsTransition() {
  const [loading, setLoading] = useState(true);
  function handleClick() {
    setLoading(true);
  }

  return (
    <Box>
      <Box sx={{ "& > button": { m: 1 } }}>
        <LoadingButton
          onClick={handleClick}
          loading={loading}
          variant=""
          disabled
        />
      </Box>
    </Box>
  );
}
