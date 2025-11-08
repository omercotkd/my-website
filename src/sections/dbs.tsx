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
        "Atlas Search",
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
      <Box width="fit-content" maxWidth="90%">
        {dbsBig.map((db) => (
          <GlowPaper
            key={db.name}
            border="2px solid"
            hoverBorderColor="primary.main"
          >
            <Box
              p={2}
              display="flex"
              flexDirection={{ xs: "column", md: "row" }}
              alignItems="center"
              gap={2}
              position={"relative"}
            >
              {/* background */}
              <Box
                component="div"
                position="absolute"
                sx={{
                  inset: 0,
                  background:
                    "linear-gradient(to bottom right, var(--mui-palette-glow-100), transparent, var(--mui-palette-glow-300))",
                }}
              />
              <Box className="hover-scale">{db.icon}</Box>
              <Box
                component="div"
                display="flex"
                flexDirection="column"
                alignItems={{ xs: "center", md: "flex-start" }}
                textAlign={{ xs: "center", md: "left" }}
                gap={1}
              >
                <Typography variant="h4" color="primary.main">
                  {db.name}
                </Typography>
                <Typography variant="body2">{db.description}</Typography>
                <Box
                  mt={2}
                  display="flex"
                  flexWrap="wrap"
                  justifyContent={{ xs: "center", md: "flex-start" }}
                  gap={1}
                >
                  {db.skills.map((skill) => (
                    <Typography
                      // each skill is unique we can use it as key
                      key={skill}
                      px={2}
                      py={0.5}
                      borderRadius={16}
                      bgcolor="glow.200"
                      color="primary.main"
                      border="1px solid"
                      borderColor="primary.dark"
                      fontSize="0.75rem"
                    >
                      {skill}
                    </Typography>
                  ))}
                </Box>
              </Box>
              <GenericDatabaseIcon
                className="hover-primary"
                sx={{
                  color: "glow.50",
                  width: "48px",
                  height: "48px",
                }}
              />
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
        {dbsSmall.map((db) => (
          <Grid
            key={db.name}
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
                <Typography variant="h6" className="hover-primary">
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
