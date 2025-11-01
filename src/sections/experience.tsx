import { Box } from "@mui/material";
import { GlowPaper } from "@/components/glow-paper";
import { SectionTitle } from "@/components/section-title";

export const ExperienceSection = () => {
  const t = (key: string) => {
    return key;
  };

  const jobExperiences = [
    {
      title: "Advanced React Patterns",
      startYear: "2022",
      endYear: "2024",
      icon: <div></div>,
      mainSkills: ["React", "TypeScript", "Frontend Architecture"],
    },
  ];

  return (
    <Box
      id="experience"
      component="section"
      position="relative"
      py={12}
      display="flex"
      gap={6}
      flexDirection="column"
    >
      <SectionTitle title={t("jobExperiences.title")} />

      {/* Timeline */}
      <Box sx={{ position: "relative" }}>
        {/* Vertical line */}
        <Box
          position="absolute"
          left="50%"
          top={0}
          bottom={0}
          width="2px"
          display={{ xs: "none", md: "block" }}
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
            width: "90%",
            mx: "auto",
          }}
        >
          {jobExperiences.map((job, index) => (
            <Box
              key={index}
              sx={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                gap: 4,
                flexDirection: {
                  xs: "column",
                  md: index % 2 === 0 ? "row" : "row-reverse",
                },
              }}
            >
              {/* Timeline dot */}
              <Box
                className="animate-glow"
                sx={{
                  position: "absolute",
                  left: { xs: "auto", md: "50%" },
                  transform: { xs: "none", md: "translateX(-50%)" },
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  backgroundColor: "primary.main",
                  border: "4px solid",
                  borderColor: "background.default",
                  display: { xs: "none", md: "block" },
                  zIndex: 10,
                }}
              />

              {/* Card */}
              <Box
                sx={{
                  flex: 1,
                  textAlign: {
                    xs: "center",
                    md: index % 2 === 0 ? "right" : "left",
                  },
                }}
              >
                <GlowPaper>
                  <div>{job.title}</div>
                </GlowPaper>
              </Box>
              {/* Spacer */}
              <Box sx={{ flex: 1, display: { xs: "none", md: "block" } }} />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
