/* eslint-disable prettier/prettier */
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Email from "./EmailConnect";
import Pword from "./PwordConnect";

export default function AllConnect() {
  return (
    <Box>
      <Typography sx={{ color: "primary.main" }}>
        Connecte toi ma gueule
      </Typography>
      <Email />
      <Pword />
    </Box>
  );
}
