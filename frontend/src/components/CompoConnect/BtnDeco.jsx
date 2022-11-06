/* eslint-disable prettier/prettier */
import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function BtnDeco() {
  return (
    <Stack spacing={2} direction="row" sx={{ display: "flex", justifyContent: "center", paddingTop: "15vh"}}>
      <Button variant="contained" sx={{width: "180px", backgroundColor:"secondary.contrastText", borderRadius: "50px", boxShadow: "3px 5px 0px 0px grey"}}>Déconnection</Button>
    </Stack>
  );
}
