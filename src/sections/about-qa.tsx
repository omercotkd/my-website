import Grid from "@mui/material/Grid";
// import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { SectionTitle } from "@/components/section-title";
import { GlowPaper } from "@/components/glow-paper";
import { useI18nContext } from "@/i18n/i18n-react";

export const AboutMeQaSection = () => {
  const aboutQaTranslation = useI18nContext().LL.aboutQa;

  const questionAnswers = [
    {
      question: "aboutQaTranslation.q1.question()",
      answer: "aboutQaTranslation.q1.answer()",
    },
  ];

  return (
    <Box
      id="about-qa"
      component="section"
      position="relative"
      py={12}
      display="flex"
      justifyContent="center"
      alignItems="center"
      gap={6}
      flexDirection="column"
    >
      <SectionTitle title={aboutQaTranslation.title()} />

      {/* Hobbies */}
      <Grid container spacing={3} width="90%">
        {questionAnswers.map((qa, ix) => (
          <Grid
            // static list we can use index as key
            key={ix} // eslint-disable-line react-x/no-array-index-key
            size={{
              xs: 12,
              sm: 6,
              md: 4,
            }}
          >
            <GlowPaper>
              <>{qa.question}</>
            </GlowPaper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
