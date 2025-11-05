import Box from "@mui/material/Box";
import MyPicture from "@/assets/images/me.jpg";

export const ProfilePicture = () => {
  return (
    <Box
      component="img"
      src={MyPicture}
      fetchPriority="high"
      alt="Omer Cohen"
      width="192px"
      borderRadius="50%"
      border="4px solid"
      borderColor="primary.dark"
      sx={{
        transition: "transform 0.3s",
        "&:hover": {
          transform: "scale(1.05)",
        },
        objectFit: "cover",
        aspectRatio: "1/1",
        boxShadow: "0 0 60px var(--mui-palette-primary-dark)",
      }}
    />
  );
};
