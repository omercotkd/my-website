import Grid from "@mui/material/Grid";
// import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { SectionTitle } from "@/components/section-title";
import { GlowPaper } from "@/components/glow-paper";
import { useI18nContext } from "@/i18n/i18n-react";

export const ToolsSection = () => {
  const toolsTranslation = useI18nContext().LL.tools;

  const tools = [
    {
      name: "FastAPI",
      emoji: "🐍",
      docUrl: "https://fastapi.tiangolo.com/",
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
        {tools.map((tool, index) => (
          <Grid
            key={index}
            size={{
              xs: 12,
              sm: 6,
              md: 4,
            }}
          >
            <GlowPaper>
              <>{tool.name} {tool.emoji}</>
            </GlowPaper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
