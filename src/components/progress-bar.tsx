import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import { StarIcon, PercentageStarIcon } from "./icons";

interface ProgressBarProps {
  progress: number; // progress percentage (0-100)
  style: "line" | "stars";
  className?: string;
}

export const ProgressBar = ({
  progress,
  style,
  className,
}: ProgressBarProps) => {
  if (style === "line") {
    return <LineProgressBar progress={progress} className={className} />;
  } else {
    return <StarsProgressBar progress={progress} className={className} />;
  }
};

const LineProgressBar = ({
  progress,
  className,
}: {
  progress: number;
  className?: string;
}) => {
  return (
    <LinearProgress
      variant="determinate"
      value={progress}
      sx={{
        height: 8,
        borderRadius: 4,
        backgroundColor: "rgba(250, 250, 250, 0.1)",
        "& .MuiLinearProgress-bar": {
          background:
            "linear-gradient(to right, var(--mui-palette-primary-main), var(--mui-palette-primary-light))",
          borderRadius: 4,
        },
      }}
      className={className}
    />
  );
};

const StarsProgressBar = ({
  progress,
  className,
}: {
  progress: number;
  className?: string;
}) => {
  const fontSize = 16;
    
  return (
    <Box sx={{ display: "flex", gap: 0.5 }}>
      {[...Array(5)].map((_, i) => {
        if (i < Math.floor(progress / 20)) {
          return (
            <StarIcon
              key={i}
              sx={{
                color: "primary.main",
                fontSize,
                transition: "all 0.3s",
                transitionDelay: `${i * 100}ms`,
              }}
              className={className}
            />
          );
        } else if (i === Math.floor(progress / 20) && progress % 20 !== 0) {
          const Icon = PercentageStarIcon({ percentage: (progress % 20) * 5 });
          return (
            <Icon
              key={i}
              sx={{
                color: "primary.main",
                fontSize,
                transition: "all 0.3s",
                transitionDelay: `${i * 100}ms`,
              }}
              className={className}
            />
          );
        } else {
          return (
            <StarIcon
              key={i}
              sx={{
                color: "rgba(250, 250, 250, 0.1)",
                fontSize,
                transition: "all 0.3s",
                transitionDelay: `${i * 100}ms`,
              }}
              className={className}
            />
          );
        }
      })}
    </Box>
  );
};
