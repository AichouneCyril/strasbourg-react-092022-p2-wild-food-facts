import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";

export default function RetourInscrit({ clicretour }) {
  const handleClick = () => {
    clicretour(false);
  };
  return (
    <Stack
      spacing={2}
      direction="row"
      sx={{ display: "flex", justifyContent: "end", paddingTop: "20px" }}
    >
      <Button variant="outlined" onClick={handleClick}>
        Retour
      </Button>
    </Stack>
  );
}

RetourInscrit.propTypes = {
  clicretour: PropTypes.element.isRequired,
};
