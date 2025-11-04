import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { SectionTitle } from "@/components/section-title";
import {
  PlaneIcon,
  DumbbellIcon,
  ChefHatIcon,
  LaptopIcon,
} from "@/components/icons";
import { GlowPaper } from "@/components/glow-paper";
import { useI18nContext } from "@/i18n/i18n-react";

export const AboutSection = () => {
  const aboutTranslation = useI18nContext().LL.about;

  //TODO change to theme colors
  const hobbies = [
    {
      icon: PlaneIcon,
      label: aboutTranslation.hobbies.traveling(),
      color: "#C084FC",
    },
    {
      icon: DumbbellIcon,
      label: aboutTranslation.hobbies.gym(),
      color: "#F0ABFC",
    },
    {
      icon: ChefHatIcon,
      label: aboutTranslation.hobbies.bakingAndCooking(),
      color: "#A78BFA",
    },
    {
      icon: LaptopIcon,
      label: aboutTranslation.hobbies.technology(),
      color: "#E879F9",
    },
  ];

  // TODO change to photos I took myself
  // const photos = [
  //   "https://images.unsplash.com/photo-1593168098026-10d982cb9055?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBhZHZlbnR1cmUlMjBtb3VudGFpbnN8ZW58MXx8fHwxNzYxNTQ4MzE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  //   "https://images.unsplash.com/photo-1756115484694-009466dbaa67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBmaXRuZXNzJTIwd29ya291dHxlbnwxfHx8fDE3NjE1OTAzNzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  //   "https://images.unsplash.com/photo-1623345260599-6f5cba600f6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb29raW5nJTIwZm9vZCUyMHByZXBhcmF0aW9ufGVufDF8fHx8MTc2MTU2NDU3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  //   "https://images.unsplash.com/photo-1623715537851-8bc15aa8c145?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwd29ya3NwYWNlfGVufDF8fHx8MTc2MTUxNTU5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  //   "https://images.unsplash.com/photo-1718483610680-c26f3d02c57b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBjb2RpbmclMjBsYXB0b3B8ZW58MXx8fHwxNzYxNTk0MDk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  // ];

  return (
    <Box
      id="about"
      component="section"
      position="relative"
      py={12}
      display="flex"
      justifyContent="center"
      alignItems="center"
      gap={6}
      flexDirection="column"
    >
      <SectionTitle title={aboutTranslation.title()} />

      {/* Bio */}
      <Box sx={{ maxWidth: "48rem", mx: "auto" }}>
        <Typography
          variant="h6"
          sx={{
            color: "text.secondary",
            lineHeight: 1.8,
            textAlign: "center",
          }}
        >
          {aboutTranslation.bio()}
        </Typography>
      </Box>

      {/* Hobbies */}
      <Grid container spacing={3} width="90%">
        {hobbies.map((hobby, ix) => (
          <Grid
            // static list we can use index as key
            key={ix} // eslint-disable-line react-x/no-array-index-key
            size={{
              xs: 6,
              md: 3,
            }}
          >
            <GlowPaper>
              <Box
                component="div"
                sx={{
                  p: 3,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 1.5,
                }}
              >
                <hobby.icon
                  sx={{
                    fontSize: 40,
                    color: hobby.color,
                  }}
                  className="hover-rotate"
                />
                <Typography variant="body1" sx={{ color: "text.secondary" }}>
                  {hobby.label}
                </Typography>
              </Box>
            </GlowPaper>
          </Grid>
        ))}
      </Grid>

      {/* Photo Gallery */}
      {/* <Grid container spacing={2}>
        {photos.map((photo, index) => (
          <Grid
            key={index}
            size={{
              xs: 6,
              md: 3,
            }}
          >
            <Box
              sx={{
                position: "relative",
                paddingTop: "100%",
                borderRadius: 3,
                overflow: "hidden",
                cursor: "pointer",
                "&:hover img": {
                  transform: "scale(1.1)",
                },
                "&:hover .overlay": {
                  opacity: 1,
                },
              }}
            >
              <Box
                component="img"
                src={photo}
                alt={`Gallery ${index + 1}`}
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.5s",
                }}
              />
              <Box
                className="overlay"
                sx={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(139, 92, 246, 0.5), transparent)",
                  opacity: 0,
                  transition: "opacity 0.3s",
                }}
              />
            </Box>
          </Grid>
        ))}
      </Grid> */}
    </Box>
  );
};
