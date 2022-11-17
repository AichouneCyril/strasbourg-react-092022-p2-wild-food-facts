import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export default function Variants() {
  return (
    <Stack spacing={1}>
      <Skeleton variant="rounded" width={1200} height={100} />
      <Skeleton variant="rounded" width={1200} height={100} />
      <Skeleton variant="rounded" width={1200} height={100} />
      <Skeleton variant="rounded" width={1200} height={100} />
      <Skeleton variant="rounded" width={1200} height={100} />
    </Stack>
  );
}
