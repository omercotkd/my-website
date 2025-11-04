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
        border: border ?? "1px solid",
        borderColor: "divider",
        transition: "all 0.3s",
        "&:hover": {
          borderColor: "border.main",
          boxShadow: "0 10px 30px var(--mui-palette-border-dark)",
          transition: "box-shadow 0.3s ease",
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
          "& .hover-primary": {
            color: "primary.main",
            transition: "color 0.3s",
          },
          "& .hover-display-block": {
            display: "block",
            transition: "display 0.3s",
          },
        },
      }}
    >
      {children}
    </Paper>
  );
};
