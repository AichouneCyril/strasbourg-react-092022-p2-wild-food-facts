import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";

export default function BtnConnect({ clic }) {
  const handleClick = () => {
    clic(true);
  };
  return (
    <Stack
      spacing={2}
      direction="row"
      sx={{ display: "flex", justifyContent: "center" }}
    >
      <Button variant="contained" sx={{ width: "180px" }} onClick={handleClick}>
        Connexion
      </Button>
    </Stack>
  );
}

BtnConnect.propTypes = {
  clic: PropTypes.element.isRequired,
};
