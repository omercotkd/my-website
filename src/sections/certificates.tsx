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
      title: "MongoDB Associate Developer",
      issuer: "MongoDB",
      year: "2025",
      emoji: "🍃",
      certificateUrl:
        "https://www.credly.com/badges/a23d4373-b218-4636-9711-36aa82019eda/linked_in_profile",
    },
    {
      title: certificatesTranslation.moreComingSoon(),
      issuer: "",
      year: "",
      emoji: "",
      certificateUrl: "",
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
              flexDirection={{
                xs: "column",
                md: ix % 2 === 0 ? "row-reverse" : "row",
              }}
              padding={2}
              gap={5}
              alignItems="center"
              component={cert.certificateUrl ? "a" : "div"}
              href={cert.certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                textDecoration: "none",
                color: "unset",
              }}
            >
              <Box fontSize="36px" className="hover-rotate">
                {cert.emoji}
              </Box>
              <Box>
                <Typography variant="h5" className="hover-primary">
                  {cert.title}
                </Typography>
                {/* Issuer */}
                <Typography
                  variant="subtitle1"
                  display={cert.issuer ? "flex" : "none"}
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
                  display={cert.year ? "flex" : "none"}
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
      />
    </Box>
  );
};
