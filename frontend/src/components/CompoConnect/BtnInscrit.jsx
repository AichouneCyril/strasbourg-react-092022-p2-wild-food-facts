import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";

export default function BtnInscrit({ clic }) {
  function handleClick() {
    clic(true);
  }
  return (
    <Stack
      spacing={2}
      direction="row"
      sx={{ display: "flex", justifyContent: "center", paddingTop: "20px" }}
    >
      <Button variant="contained" sx={{ width: "140px" }} onClick={handleClick}>
        Inscription
      </Button>
    </Stack>
  );
}

BtnInscrit.propTypes = {
  clic: PropTypes.element.isRequired,
  handleClick.propTypes = {
    onClick: PropTypes.element.isRequired,
  },
};
