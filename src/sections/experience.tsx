import { Box } from "@mui/material";
import { GlowPaper } from "@/components/glow-paper";
import { SectionTitle } from "@/components/section-title";
import { TimeLine } from "@/components/time-line";

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
      <TimeLine
        timeLineItems={jobExperiences.map((job, ix) => (
          // eslint-disable-next-line react-x/no-array-index-key
          <GlowPaper key={ix}>
            <div>{job.title}</div>
          </GlowPaper>
        ))}
      />
    </Box>
  );
};
