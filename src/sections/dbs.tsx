import Grid from "@mui/material/Grid";
// import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { SectionTitle } from "@/components/section-title";
import { GlowPaper } from "@/components/glow-paper";
import { useI18nContext } from "@/i18n/i18n-react";

export const DBsSection = () => {
  const dbsTranslation = useI18nContext().LL.dbs;

  const dbsBig = [
    {
      name: "MongoDB",
      emoji: "🍃",
      description: dbsTranslation.mongo.description(),
      skills: [
        "Schema Design",
        "Aggregation Framework",
        "Indexing",
        "Performance Optimization",
      ],
      sideIcon: <div></div>,
    },
  ];

  const dbsSmall = [
    {
      name: "Redis",
      icon: <div></div>,
    },
  ];

  return (
    <Box
      id="dbs"
      component="section"
      position="relative"
      py={12}
      display="flex"
      justifyContent="center"
      alignItems="center"
      gap={6}
      flexDirection="column"
    >
      <SectionTitle title={dbsTranslation.title()} />
      {/* Big Databases */}
      <Box width="90%">
        {dbsBig.map((db, index) => (
          <GlowPaper key={index}>
            <>
              {db.name} {db.emoji}
            </>
          </GlowPaper>
        ))}
      </Box>
      {/* Small Databases */}
      <Grid container spacing={3} width="90%">
        {dbsSmall.map((db, index) => (
          <Grid
            key={index}
            size={{
              xs: 12,
              sm: 6,
              md: 4,
            }}
          >
            <GlowPaper>
              <>
                {db.name} {db.icon}
              </>
            </GlowPaper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
