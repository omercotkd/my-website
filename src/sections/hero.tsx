import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { ScrollIndicator } from "@/components/scroll-indicator";
import {
  GitHubButton,
  EmailButton,
  LinkedInButton,
} from "@/components/buttons/contact";
import { ProfilePicture } from "@/components/profile-picture";
import { useI18nContext } from "@/i18n/i18n-react";

export const HeroSection = () => {
  const heroTranslation = useI18nContext().LL.hero;

  return (
    <Box
      id="hero"
      component="section"
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      position="relative"
      overflow="hidden"
      width={"100%"}
    >
      {/* Animated Background */}
      <Box component="div" zIndex={-1}>
        <Box
          component="div"
          sx={{
            position: "absolute",
            width: "384px",
            height: "384px",
            top: "-172px",
            left: "-172px",
            background: "rgba(139, 92, 246, 0.2)",
            borderRadius: "50%",
            filter: "blur(80px)",
          }}
        />
        <Box
          component="div"
          sx={{
            position: "absolute",
            width: "384px",
            height: "384px",
            bottom: "-172px",
            right: "-172px",
            background: "rgba(168, 85, 247, 0.2)",
            borderRadius: "50%",
            filter: "blur(80px)",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, transparent, rgba(139, 92, 246, 0.05), transparent)",
          }}
        />
      </Box>
      {/* Content */}
      <Box
        component="div"
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={"2rem"}
      >
        {/* Profile Picture */}
        <ProfilePicture />
        {/* Name and Title */}
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap={"0.5rem"}
          component="div"
        >
          {/* TODO: make the color change from dark to light (gradient) */}
          <Typography variant="h1" color="primary">
            {heroTranslation.myName()}
          </Typography>
          <Typography variant="h3" color="grey.100" fontWeight={400}>
            {heroTranslation.myProfession()}
          </Typography>
          <Typography
            variant="body1"
            color="grey.50"
            fontWeight={400}
            fontStyle={"italic"}
          >
            "{heroTranslation.myPunchline()}"
          </Typography>
        </Box>
        {/* Social Buttons */}
        <Box component="div" display="flex" justifyContent="center" gap="1rem">
          <GitHubButton />
          <LinkedInButton />
          <EmailButton />
        </Box>
      </Box>
      <ScrollIndicator />
    </Box>
  );
};
