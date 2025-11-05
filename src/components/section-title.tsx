import { Box, Typography } from "@mui/material";

export const SectionTitle = ({ title }: { title: string }) => {
  const lineGradient =
    "linear-gradient(to right, var(--mui-palette-primary-main), var(--mui-palette-primary-light))";

  return (
    <Box
      sx={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
      maxWidth="90%"
    >
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: "36px", md: "48px" },
          background: lineGradient,
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {title}
      </Typography>
      <Box
        component="span"
        sx={{
          height: 4,
          width: 90,
          background: lineGradient,
          margin: "0 auto",
          borderRadius: 2,
        }}
      />
    </Box>
  );
};
