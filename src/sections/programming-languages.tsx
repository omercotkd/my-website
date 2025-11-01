import Grid from "@mui/material/Grid";
// import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { SectionTitle } from "@/components/section-title";
import { GlowPaper } from "@/components/glow-paper";
import { useI18nContext } from "@/i18n/i18n-react";

export const ProgrammingLanguagesSection = () => {
  const plTranslation = useI18nContext().LL.programmingLanguages;

  const languages = [
    {
      name: "Python",
      proficiency: 5,
      color: "#3776AB",
    },
    {
      name: "JavaScript",
      proficiency: 5,
      color: "#F7DF1E",
    },
    {
      name: "TypeScript",
      proficiency: 5,
      color: "#3178C6",
    },
    {
      name: "HTML/CSS",
      proficiency: 5,
      color: "#E34F26",
    },
    {
      name: "Rust",
      proficiency: 3,
      color: "#D34516",
    },
  ];

  return (
    <Box
      id="skills"
      component="section"
      position="relative"
      py={12}
      display="flex"
      justifyContent="center"
      alignItems="center"
      gap={6}
      flexDirection="column"
    >
      <SectionTitle title={plTranslation.title()} />

      {/* Hobbies */}
      <Grid container spacing={3} width="90%">
        {languages.map((lang, index) => (
          <Grid
            key={index}
            size={{
              xs: 12,
              sm: 6,
              md: 4,
            }}
          >
            <GlowPaper>
              <>{lang.name}</>
            </GlowPaper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
