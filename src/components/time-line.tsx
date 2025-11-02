import { Box } from "@mui/material";

interface TimeLineProps {
  timeLineItems: React.ReactNode[];
  lastNode?: React.ReactNode;
}

export const TimeLine = ({ timeLineItems, lastNode }: TimeLineProps) => {
  return (
    <Box sx={{ position: "relative" }}>
      {/* Vertical line */}
      <Box
        position="absolute"
        left={{ xs: "5%", md: "50%" }}
        top={0}
        bottom={0}
        width="2px"
        display="block"
        sx={{
          background:
            "linear-gradient(to bottom, var(--mui-palette-primary-main), var(--mui-palette-primary-light), var(--mui-palette-primary-main))",
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 4,
          width: "100%",
          mx: "auto",
        }}
      >
        {timeLineItems.map((item, index) => (
          <Box
            key={index}
            sx={{
              position: "relative",
              display: "flex",
              left: 0,
              alignItems: { xs: "flex-start", md: "center" },
              gap: 4,
              flexDirection: {
                xs: "column",
                md: index % 2 === 0 ? "row" : "row-reverse",
              }
            }}
          >
            {/* Timeline dot */}
            <Box
              sx={{
                position: "absolute",
                left: { xs: "5%", md: "50%" },
                transform: "translateX(-50%)",
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor: "primary.main",
                border: "4px solid",
                borderColor: "background.default",
                display: "block",
                zIndex: 10,
              }}
            />
            {/* Item */}
            <Box
              paddingLeft={{ xs: "8%", md: 0 }}
              sx={{
                flex: 1,
                textAlign: {
                  xs: "left",
                  md: index % 2 === 0 ? "right" : "left",
                },
              }}
            >
              {item}
            </Box>
            {/* Item spacer */}
            <Box sx={{ flex: 1, display: { xs: "none", md: "block" } }} />
          </Box>
        ))}

        {lastNode && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "flex-start", md: "center" },
              paddingLeft: { xs: "2%", md: 0 },
              position: "relative",
              zIndex: 15,
            }}
          >
            {lastNode}
          </Box>
        )}
      </Box>
    </Box>
  );
};
