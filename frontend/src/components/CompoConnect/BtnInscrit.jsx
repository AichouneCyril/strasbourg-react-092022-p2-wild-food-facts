/* eslint-disable prettier/prettier */
import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function BtnInscrit() {
  return (
    <Stack spacing={2} direction="row" sx={{ display: "flex", justifyContent: "center", paddingTop: "20px"}}>
      <Button variant="contained" sx={{width: "140px"}}>Inscription</Button>
    </Stack>
  );
}
