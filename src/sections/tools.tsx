import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { SectionTitle } from "@/components/section-title";
import { GlowPaper } from "@/components/glow-paper";
import { useI18nContext } from "@/i18n/i18n-react";
import { ExternalLinkIcon } from "@/components/icons";

export const ToolsSection = () => {
  const toolsTranslation = useI18nContext().LL.tools;

  const tools = [
    {
      name: "FastAPI",
      emoji: "🐍",
      docUrl: "https://fastapi.tiangolo.com/",
    },
    {
      name: "Flask",
      emoji: "🍶",
      docUrl: "https://flask.palletsprojects.com/",
    },
    {
      name: "React",
      emoji: "⚛️",
      docUrl: "https://react.dev/",
    },
    {
      name: "Node.js",
      emoji: "🟢",
      docUrl: "https://nodejs.org/en/about/",
    },
    {
      name: "Docker",
      emoji: "🐳",
      docUrl: "https://www.docker.com/",
    },
    {
      name: "Git",
      emoji: "🔧",
      docUrl: "https://git-scm.com/",
    },
    {
      name: "Axum",
      emoji: "🦀",
      docUrl: "https://docs.rs/axum/latest/axum/",
    },
    {
      name: "Kafka",
      emoji: "🍞",
      docUrl: "https://kafka.apache.org/",
    },
    {
      name: "Airflow",
      emoji: "💨",
      docUrl: "https://airflow.apache.org/",
    },
    {
      name: "AWS",
      emoji: "☁️",
      docUrl: "https://aws.amazon.com/",
    },
  ];

  return (
    <Box
      id="tools"
      component="section"
      position="relative"
      py={12}
      display="flex"
      justifyContent="center"
      alignItems="center"
      gap={6}
      flexDirection="column"
    >
      <SectionTitle title={toolsTranslation.title()} />

      {/* Hobbies */}
      <Grid container spacing={3} width="90%">
        {tools.map((tool) => (
          <Grid
            // name is unique we can use it as key
            key={tool.name}
            size={{
              xs: 6,
              sm: 4,
              md: 3,
            }}
          >
            <GlowPaper>
              <Box
                component="div"
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap={1.5}
                padding={3}
                position={"relative"}
              >
                {/* Hover top right effect */}
                <Box
                  className="hover-display-block"
                  component="div"
                  position="absolute"
                  display="none"
                  top={0}
                  right={0}
                  width={80}
                  height={80}
                  sx={{
                    background:
                      "linear-gradient(to bottom right, var(--mui-palette-glow-100), transparent)",
                    borderBottomLeftRadius: "100%",
                    transition: "opacity 0.3s",
                  }}
                />
                <Typography variant="h2" className="hover-rotate">
                  {tool.emoji}
                </Typography>
                <Typography variant="h6" className="hover-primary">
                  {tool.name}
                </Typography>
                <Typography
                  variant="subtitle2"
                  component="a"
                  href={tool.docUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-primary"
                  display="flex"
                  alignItems="center"
                  gap={0.5}
                >
                  <ExternalLinkIcon sx={{ fontSize: 12 }} />
                  {toolsTranslation.viewTheDocs()}
                </Typography>
              </Box>
            </GlowPaper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
