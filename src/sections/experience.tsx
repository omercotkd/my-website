import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { GlowPaper } from "@/components/glow-paper";
import { SectionTitle } from "@/components/section-title";
import { TimeLine } from "@/components/time-line";
import { CodeIcon, RocketIcon, ScanHeartIcon } from "@/components/icons";
import { useI18nContext } from "@/i18n/i18n-react";

export const ExperienceSection = () => {
  const experienceTranslations = useI18nContext().LL.experience;

  const experiences = [
    {
      title: experienceTranslations.jobExperiences.abaHatuv.title(),
      organization: experienceTranslations.jobExperiences.abaHatuv.company(),
      description: experienceTranslations.jobExperiences.abaHatuv.description(),
      startYear: "2024",
      endYear: experienceTranslations.present(),
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
      volunteer: false,
    },
    {
      title: experienceTranslations.volunteerExperience.carenet.title(),
      organization:
        experienceTranslations.volunteerExperience.carenet.organization(),
      description:
        experienceTranslations.volunteerExperience.carenet.description(),
      startYear: "2024",
      endYear: "2024",
      icon: ScanHeartIcon,
      mainSkills: [
        "Python",
        "MongoDB",
        "FastAPI",
        "Redis",
        "Git",
        "Vector Search",
        "RAG",
        "Web scraping",
        "Git Actions",
      ],
      volunteer: true,
    },
    {
      title: experienceTranslations.jobExperiences.saitlabs.title(),
      organization: experienceTranslations.jobExperiences.saitlabs.company(),
      description: experienceTranslations.jobExperiences.saitlabs.description(),

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
      volunteer: false,
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
      alignItems="center"
    >
      <SectionTitle title={experienceTranslations.title()} />
      <TimeLine
        timeLineItems={experiences.map((exp, ix) => (
          // eslint-disable-next-line react-x/no-array-index-key
          <GlowPaper key={ix}>
            <Box maxWidth={{ md: "40vw" }} padding={3}>
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                gap={2}
              >
                <Box
                  width={"50px"}
                  height={"50px"}
                  bgcolor={"glow.200"}
                  borderRadius={"20%"}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  border="1px solid var(--mui-palette-glow-50)"
                >
                  <exp.icon sx={{ fontSize: "24px", color: "primary.main" }} />
                </Box>
                <Box>
                  <Typography variant="h6" fontWeight="bold" className="hover-primary">
                    {exp.title}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {exp.organization} &bull; {exp.startYear} - {exp.endYear}
                  </Typography>
                </Box>
              </Box>
              <Typography variant="body2">{exp.description}</Typography>
              <Box
                display={"flex"}
                flexDirection={"row"}
                flexWrap={"wrap"}
                gap={1}
                marginTop={2}
              >
                {exp.mainSkills.map((skill) => (
                  <Typography key={skill} variant="body2">
                    {skill}
                  </Typography>
                ))}
              </Box>
            </Box>
          </GlowPaper>
        ))}
      />
    </Box>
  );
};
