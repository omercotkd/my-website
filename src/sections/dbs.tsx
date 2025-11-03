import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { SectionTitle } from "@/components/section-title";
import { GlowPaper } from "@/components/glow-paper";
import { useI18nContext } from "@/i18n/i18n-react";
import {
  RedisIcon,
  PostgreSQLIcon,
  MongoDBIcon,
  GenericDatabaseIcon,
} from "@/components/icons";

export const DBsSection = () => {
  const dbsTranslation = useI18nContext().LL.dbs;

  const dbsBig = [
    {
      name: "MongoDB",
      icon: (
        <MongoDBIcon sx={{ width: 80, height: 80 }} className="animate-float" />
      ),
      description: dbsTranslation.mongo.description(),
      skills: [
        "Schema Design",
        "Aggregation Framework",
        "Indexing",
        "Performance Optimization",
      ],
    },
  ];

  const dbsSmall = [
    {
      name: "Redis",
      icon: <RedisIcon sx={{ width: 48, height: 48 }} />,
    },
    {
      name: "PostgreSQL",
      icon: <PostgreSQLIcon sx={{ width: 48, height: 48 }} />,
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
      <Box width="80%">
        {dbsBig.map((db, index) => (
          <GlowPaper key={index}>
            <Box
              p={3}
              display="flex"
              flexDirection={{ xs: "column", md: "row" }}
              alignItems="center"
              gap={1}
            >
              <Box className="hover-scale">{db.icon}</Box>
              <Box>
                <Typography variant="h4" color="primary.main" fontWeight={300}>
                  {db.name}
                </Typography>
                <Typography variant="body1">{db.description}</Typography>
                <Box
                  mt={2}
                  display="flex"
                  flexWrap="wrap"
                  justifyContent="center"
                  gap={1}
                >
                  {db.skills.map((skill, skillIndex) => (
                    <Box
                      key={skillIndex}
                      px={2}
                      py={0.5}
                      borderRadius={16}
                      bgcolor="primary.main"
                      color="background.paper"
                      fontSize="0.875rem"
                    >
                      {skill}
                    </Box>
                  ))}
                </Box>
              </Box>
              <GenericDatabaseIcon className="hover-primary" />
            </Box>
          </GlowPaper>
        ))}
      </Box>
      {/* Small Databases */}
      <Grid
        container
        spacing={3}
        width="90%"
        display="flex"
        justifyContent="center"
      >
        {dbsSmall.map((db, index) => (
          <Grid
            key={index}
            size={{
              xs: 12,
              sm: 6,
              md: 4,
            }}
            maxWidth="200px"
          >
            <GlowPaper>
              <Box
                p={3}
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                <Box className="hover-scale">{db.icon}</Box>
                <Typography variant="h5" className="hover-primary">
                  {db.name}
                </Typography>
              </Box>
            </GlowPaper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
