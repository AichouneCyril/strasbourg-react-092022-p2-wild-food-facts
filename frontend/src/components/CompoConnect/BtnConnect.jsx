/* eslint-disable prettier/prettier */
import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function BtnConnect() {
  return (
    <Stack spacing={2} direction="row" sx={{ display: "flex", justifyContent: "center"}}>
      <Button variant="contained" sx={{width: "180px"}}>Connexion</Button>
    </Stack>
  );
}
