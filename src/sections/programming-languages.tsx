import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { SectionTitle } from "@/components/section-title";
import { GlowPaper } from "@/components/glow-paper";
import { useI18nContext } from "@/i18n/i18n-react";
import { ProgressBar } from "@/components/progress-bar";

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
      color: "#096192",
    },
    {
      name: "HTML/CSS",
      proficiency: 4.5,
      color: "#fe9a00",
    },
    {
      name: "Rust",
      proficiency: 3,
      color: "#D34516",
    },
    {
      name: "C",
      proficiency: 2,
      color: "#555555",
    }
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
      <Grid container spacing={3} width="80%">
        {languages.map((lang) => (
          <Grid
            // name is unique we can use it as key
            key={lang.name}
            size={{
              xs: 12,
              sm: 6,
              md: 4,
            }}
          >
            <GlowPaper>
              <Box padding={2} display="flex" flexDirection="column" gap={2}>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  dir="ltr"
                >
                  <Typography
                    variant="body1"
                    color={lang.color}
                    className="hover-scale"
                  >
                    {lang.name}
                  </Typography>
                  <ProgressBar
                    style="stars"
                    progress={lang.proficiency * 20}
                    className="hover-scale"
                  />
                </Box>
                <ProgressBar style="line" progress={lang.proficiency * 20} />
                <Typography variant="subtitle2">
                  {plTranslation.proficiency()}: {lang.proficiency}/5
                </Typography>
              </Box>
            </GlowPaper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
