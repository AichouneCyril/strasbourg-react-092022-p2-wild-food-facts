import { Typography, Box } from "@mui/material";

export default function Home() {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingTop: 10,
          backgroundColor: "primary.main",
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: 300,
            textAlign: "center",
          }}
        >
          <Typography
            gutterBottom
            sx={{
              color: "primary.light",
              fontFamily: "Impact",
              lineHeight: 0.8,
              fontSize: 100,
            }}
          >
            WILD FOOD FACTS
          </Typography>
        </Box>
      </Box>
    </div>
  );
}
