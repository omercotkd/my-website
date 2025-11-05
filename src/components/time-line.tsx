import { Box } from "@mui/material";

interface TimeLineProps {
  timeLineItems: React.ReactNode[];
  lastNode?: React.ReactNode;
}

export const TimeLine = ({ timeLineItems }: TimeLineProps) => {
  return (
    <Box
      component="div"
      display="flex"
      justifyContent={"center" }
      marginX={{
        xs: "5%",
      }}
    >
      <Box component="div" position="relative" paddingX={{ xs: "5%" }}>
        {/* Vertical line */}
        <Box
          position="absolute"
          left={{ xs: "3%", md: "50%" }}
          top={0}
          bottom={0}
          width="2px"
          display="block"
          sx={{
            background:
              "linear-gradient(to bottom, var(--mui-palette-primary-main), var(--mui-palette-primary-light), var(--mui-palette-primary-main))",
            transform: "translateX(-50%)",
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            
          }}
        >
          {timeLineItems.map((item, ix) => (
            <Box
              key={ix} // eslint-disable-line react-x/no-array-index-key
              sx={{
                // Only in md and up when time line is centered
                // we want the dot position to be relative to this box
                position: { md: "relative" },
                display: "flex",
                left: { md: "50%" },
                transform: { md: "translateX(-50%)" },
                alignItems: "center",
                gap: 4,
                flexDirection: {
                  md: ix % 2 === 0 ? "row" : "row-reverse",
                },
                width: "fit-content",
              }}
            >
              {/* Timeline dot */}
              <Box
                sx={{
                  position: "absolute",
                  left: { xs: "3%", md: "50%" },
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
                sx={{
                  transform: {
                    md:
                      ix % 2 === 0
                        ? "translateX(-50%) translateX(-10px)"
                        : "translateX(50%) translateX(10px)",
                  },
                }}
              >
                {item}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
