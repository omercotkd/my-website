import { Box } from "@mui/material";
import { GlowPaper } from "@/components/glow-paper";
import { SectionTitle } from "@/components/section-title";
import { TimeLine } from "@/components/time-line";
import { CodeIcon, RocketIcon } from "@/components/icons";

export const ExperienceSection = () => {
  const t = (key: string) => {
    return key;
  };

  const jobExperiences = [
    {
      title: "Full-Stack Developer",
      company: "AbaHatuv",
      startYear: "2024",
      endYear: "present",
      icon: RocketIcon,
      mainSkills: [
        "React",
        "TypeScript",
        "Python",
        "MongoDB",
        "FastAPI",
        "Git",
        "Docker",
        "AWS",
      ],
    },
    {
      title: "Full-Stack Developer (Backend Focused)",
      company: "Saitlabs",
      startYear: "2022",
      endYear: "2024",
      icon: CodeIcon,
      mainSkills: [
        "Python",
        "MongoDB",
        "FastAPI",
        "Flask",
        "React",
        "Redis",
        "Git",
        "Node.js",
      ],
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
