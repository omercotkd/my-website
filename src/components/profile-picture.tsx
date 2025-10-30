import Box from "@mui/material/Box";

export const ProfilePicture = () => {
  return (
    <Box
      component="img"
      src="https://images.unsplash.com/photo-1737575655055-e3967cbefd03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjE1MzgwNzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
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
