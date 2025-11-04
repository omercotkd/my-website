import { Box, Typography } from "@mui/material";
import { AwardIcon, CalendarIcon, GraduationCapIcon } from "@/components/icons";
import { GlowPaper } from "@/components/glow-paper";
import { SectionTitle } from "@/components/section-title";
import { TimeLine } from "@/components/time-line";
import { useI18nContext } from "@/i18n/i18n-react";

export const CertificatesSection = () => {
  const certificatesTranslation = useI18nContext().LL.certificates;

  const certificates = [
    {
      title: "Advanced React Patterns",
      issuer: "Frontend Masters",
      year: "2024",
      emoji: "⚛️",
    },
    {
      title: "MongoDB Certified Developer",
      issuer: "MongoDB University",
      year: "2023",
      emoji: "🍃",
    },
    {
      title: "Python for Data Science",
      issuer: "Coursera",
      year: "2023",
      emoji: "🐍",
    },
    {
      title: "AWS Solutions Architect",
      issuer: "Amazon Web Services",
      year: "2022",
      emoji: "☁️",
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
      <SectionTitle title={certificatesTranslation.title()} />
      <TimeLine
        timeLineItems={certificates.map((cert, ix) => (
          // static list we can use index as key
          // eslint-disable-next-line react-x/no-array-index-key
          <GlowPaper key={ix}>
            <Box
              display="flex"
              flexDirection={{ xs: "column", md: "row" }}
              padding={2}
              gap={5}
              alignItems="center"
            >
              <Box>{cert.emoji}</Box>
              <Box>
                <Typography variant="h5">{cert.title}</Typography>
                {/* Issuer */}
                <Typography
                  variant="subtitle1"
                  display="flex"
                  gap={1}
                  alignItems={"center"}
                >
                  <GraduationCapIcon
                    sx={{
                      fontSize: "var(--mui-typography-subtitle1-fontSize)",
                    }}
                  />
                  {cert.issuer}
                </Typography>
                {/* Year */}
                <Typography
                  variant="subtitle1"
                  display="flex"
                  gap={1}
                  alignItems={"center"}
                >
                  <CalendarIcon
                    sx={{
                      fontSize: "var(--mui-typography-subtitle1-fontSize)",
                    }}
                  />
                  {cert.year}
                </Typography>
              </Box>
              <AwardIcon
                sx={{
                  color: "glow.50",
                }}
                className="hover-primary"
              />
            </Box>
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
              <Typography>
                {certificatesTranslation.moreComingSoon()}
              </Typography>
            </Box>
          </GlowPaper>
        }
      />
    </Box>
  );
};
