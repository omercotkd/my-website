import Paper from "@mui/material/Paper";

interface GlowPaperProps {
  children: React.ReactNode;
  rotationDirection?: "clockwise" | "counterclockwise";
}

// A Paper component that adds a glowing effect on hover
export const GlowPaper = ({ children, rotationDirection }: GlowPaperProps) => {
  const hoverTransform =
    rotationDirection === "counterclockwise"
      ? "scale(1.1) rotate(-6deg)"
      : "scale(1.1) rotate(6deg)";

  return (
    <Paper
      component="div"
      sx={{
        border: "1px solid",
        borderColor: "divider",
        transition: "all 0.3s",
        "&:hover": {
          // TODO change to use theme variables
          borderColor: "rgba(139, 92, 246, 0.5)",
          boxShadow: "0 10px 30px rgba(139, 92, 246, 0.1)",
          // every child and nested child with class hover-rotate
          "& .hover-rotate": {
            transform: hoverTransform,
            transition: "transform 0.3s",
          },
        },
      }}
    >
      {children}
    </Paper>
  );
};
