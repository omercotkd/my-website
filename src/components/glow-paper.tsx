import Paper from "@mui/material/Paper";

interface GlowPaperProps {
  children: React.ReactNode;
  border?: string;
}

// A Paper component that adds a glowing effect on hover
export const GlowPaper = ({ children, border }: GlowPaperProps) => {

  return (
    <Paper
      component="div"
      sx={{
        border: border || "1px solid",
        borderColor: "divider",
        transition: "all 0.3s",
        "&:hover": {
          // TODO change to use theme variables
          borderColor: "rgba(139, 92, 246, 0.5)",
          boxShadow: "0 10px 30px rgba(139, 92, 246, 0.1)",
          "& .hover-rotate": {
            transform: "scale(1.1) rotate(6deg)",
            transition: "transform 0.3s",
          },
          "& .hover-rotate-counter": {
            transform: "scale(1.1) rotate(-6deg)",
            transition: "transform 0.3s",
          },
          "& .hover-scale": {
            transform: "scale(1.1)",
            transition: "transform 0.3s",
          },
        },
      }}
    >
      {children}
    </Paper>
  );
};
