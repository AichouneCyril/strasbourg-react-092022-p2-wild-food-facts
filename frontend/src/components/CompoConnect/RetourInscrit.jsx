import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function RetourInscrit() {
  return (
    <Stack
      spacing={2}
      direction="row"
      sx={{ display: "flex", justifyContent: "end", paddingTop: "20px" }}
    >
      <Button variant="outlined">Retour</Button>
    </Stack>
  );
}
