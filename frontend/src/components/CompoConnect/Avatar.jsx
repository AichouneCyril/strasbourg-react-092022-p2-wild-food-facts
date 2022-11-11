import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

export default function ImageAvatars() {
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{ display: "flex", justifyContent: "center", paddingTop: "50px" }}
    >
      <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 200, height: 200 }}
      />
    </Stack>
  );
}
