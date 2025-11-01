import { Box, Typography, Paper } from "@mui/material";
import { AwardIcon, CalendarIcon, GraduationCapIcon } from "@/components/icons";
import { GlowPaper } from "@/components/glow-paper";
import { SectionTitle } from "@/components/section-title";

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

      {/* Timeline */}
      <Box sx={{ position: "relative" }}>
        {/* Vertical line */}
        <Box
          sx={{
            position: "absolute",
            left: "50%",
            top: 0,
            bottom: 0,
            width: "2px",
            background:
              "linear-gradient(to bottom, var(--mui-palette-primary-main), var(--mui-palette-primary-light), var(--mui-palette-primary-main))",
            display: { xs: "none", md: "block" },
          }}
        />

        <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {certificates.map((cert, index) => (
            <Box
              key={index}
              sx={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                gap: 4,
                flexDirection: {
                  xs: "column",
                  md: index % 2 === 0 ? "row" : "row-reverse",
                },
              }}
            >
              {/* Timeline dot */}
              <Box
                className="animate-glow"
                sx={{
                  position: "absolute",
                  left: { xs: "auto", md: "50%" },
                  transform: { xs: "none", md: "translateX(-50%)" },
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  backgroundColor: "primary.main",
                  border: "4px solid",
                  borderColor: "background.default",
                  display: { xs: "none", md: "block" },
                  zIndex: 10,
                }}
              />

              {/* Card */}
              <Box
                sx={{
                  flex: 1,
                  textAlign: {
                    xs: "center",
                    md: index % 2 === 0 ? "right" : "left",
                  },
                }}
              >
                <Paper
                  sx={{
                    p: 3,
                    display: "inline-block",
                    width: { xs: "100%", md: "auto" },
                    backgroundColor: "background.paper",
                    border: "1px solid",
                    borderColor: "divider",
                    transition: "all 0.3s",
                    cursor: "pointer",
                    "&:hover": {
                      borderColor: "rgba(139, 92, 246, 0.5)",
                      boxShadow: "0 20px 40px rgba(139, 92, 246, 0.1)",
                      "& .cert-icon": {
                        transform: "scale(1.1) rotate(6deg)",
                      },
                      "& .cert-title": {
                        color: "primary.main",
                      },
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 2,
                      flexDirection: {
                        xs: "column",
                        md: index % 2 === 0 ? "row-reverse" : "row",
                      },
                      // alignItems: { xs: "center", md: "center" },
                    }}
                  >
                    <Typography
                      className="cert-icon"
                      sx={{
                        fontSize: "2.5rem",
                        transition: "transform 0.3s",
                      }}
                    >
                      {cert.icon}
                    </Typography>
                    <Box sx={{ flex: 1 }}>
                      <Typography
                        variant="h6"
                        className="cert-title"
                        sx={{
                          mb: 0.5,
                          transition: "color 0.3s",
                        }}
                      >
                        {cert.title}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 0.5,
                          color: "text.secondary",
                          justifyContent: {
                            xs: "center",
                            md: "flex-start",
                          },
                        }}
                      >
                        <GraduationCapIcon sx={{ fontSize: 16 }} />
                        <Typography variant="body2">{cert.platform}</Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 0.5,
                          color: "text.secondary",
                          mt: 0.5,
                          justifyContent: {
                            xs: "center",
                            md: "flex-start",
                          },
                        }}
                      >
                        <CalendarIcon sx={{ fontSize: 16 }} />
                        <Typography variant="body2">{cert.year}</Typography>
                      </Box>
                    </Box>
                    <AwardIcon
                      sx={{
                        color: "primary.dark",
                        fontSize: 24,
                      }}
                    />
                  </Box>
                </Paper>
              </Box>
              {/* Spacer */}
              <Box sx={{ flex: 1, display: { xs: "none", md: "block" } }} />
            </Box>
          ))}

          {/* Coming Soon Card */}
          <Box
            sx={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 15,
            }}
          >
            <Paper
              sx={{
                p: 3,
                maxWidth: "28rem",
                backgroundColor: "background.paper",
                border: "1px dashed",
                borderColor: "rgba(168, 85, 247, 0.5)",
                transition: "border-color 0.3s",
                "&:hover": {
                  borderColor: "secondary.main",
                },
              }}
            >
              <Box
                sx={{
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
            </Paper>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
