import { SectionTitle } from "@/components/section-title";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useI18nContext } from "@/i18n/i18n-react";
import { SparkleIcon } from "@/components/icons";
import { GlowPaper } from "@/components/glow-paper";

export const HowStartedSection = () => {
  const howStartedTranslations = useI18nContext().LL.howStarted;

  return (
    <Box
      id="how-started"
      component="section"
      position="relative"
      py={12}
      display="flex"
      gap={6}
      flexDirection="column"
      alignItems="center"
    >
      <SectionTitle
        title={
          <Box display="flex" alignItems="center" gap={1}>
            <SparkleIcon sx={{ color: "primary.main", fontSize: "80%" }} />
            {howStartedTranslations.title()}
            <SparkleIcon sx={{ color: "primary.light", fontSize: "80%" }} />
          </Box>
        }
      />
      <Box
        component="div"
        display="flex"
        flexDirection="column"
        gap={3}
        maxWidth={{ xs: "85vw", md: "60vw" }}
      >
        {Object.entries(howStartedTranslations.steps).map(([key, step], ix) => (
          <GlowPaper key={key}>
            <Box padding={3} display="flex" flexDirection="row" gap={2}>
              <Box
                component="div"
                borderRadius={"50%"}
                width={"32px"}
                height={"32px"}
                display="flex"
                flex={"none"}
                justifyContent="center"
                alignItems="center"
                sx={{
                  background:
                    "linear-gradient(to right, var(--mui-palette-primary-main), var(--mui-palette-primary-light))",
                }}
              >
                <Typography fontSize={"12px"} color="text.primary">
                  {ix + 1}
                </Typography>
              </Box>
              <Typography
                variant="body1"
                className="hover-text-primary"
              >
                {step()}
              </Typography>
            </Box>
          </GlowPaper>
        ))}
      </Box>
    </Box>
  );
};
