import { Box, Typography } from "@mui/material";
import { AwardIcon } from "@/components/icons";
// import { AwardIcon, CalendarIcon, GraduationCapIcon } from "@/components/icons";
import { GlowPaper } from "@/components/glow-paper";
import { SectionTitle } from "@/components/section-title";
import { TimeLine } from "@/components/time-line";

export const CertificatesSection = () => {
  const t = (key: string) => {
    return key;
  };

  const certificates = [
    {
      title: "Advanced React Patterns",
      platform: "Frontend Masters",
      year: "2024",
      icon: "⚛️",
    },
    {
      title: "MongoDB Certified Developer",
      platform: "MongoDB University",
      year: "2023",
      icon: "🍃",
    },
    {
      title: "Python for Data Science",
      platform: "Coursera",
      year: "2023",
      icon: "🐍",
    },
    {
      title: "AWS Solutions Architect",
      platform: "Amazon Web Services",
      year: "2022",
      icon: "☁️",
    },
  ];

  return (
    <Box
      id="certificates"
      component="section"
      position="relative"
      py={12}
      display="flex"
      gap={6}
      flexDirection="column"
    >
      <SectionTitle title={t("certificates.title")} />
      <TimeLine
        timeLineItems={certificates.map((cert, index) => (
          <GlowPaper key={index}>
            <div>{cert.title}</div>
          </GlowPaper>
        ))}
        lastNode={
          <GlowPaper border="2px dashed">
            <Box
              sx={{
                p: 3,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1.5,
                color: "text.secondary",
              }}
            >
              <AwardIcon sx={{ color: "secondary.main", fontSize: 20 }} />
              <Typography>{t("certificates.comingSoon")}</Typography>
            </Box>
          </GlowPaper>
        }
      />
    </Box>
  );
};
