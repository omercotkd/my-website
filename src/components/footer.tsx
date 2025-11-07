import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useI18nContext } from "@/i18n/i18n-react";
import Divider from "@mui/material/Divider";
import {
  GitHubIconButton,
  LinkedInIconButton,
  EmailIconButton,
} from "@/components/buttons/contact";
import { HeartIcon, GlobeIcon } from "./icons";
import Button from "@mui/material/Button";
import type { Locales } from "@/i18n/i18n-types";

export const Footer = () => {
  const translation = useI18nContext();
  const languageNames = new Intl.DisplayNames([translation.locale], {
    type: "language",
  });

  const toggleLanguage = () => {
    const nextLanguage: Locales = translation.locale === "en" ? "he" : "en";

    translation.setLocale(nextLanguage);
  };

  return (
    <Box
      sx={{
        bgcolor: "background.darkPaper",
      }}
    >
      <Divider sx={{ my: 2 }} />
      <Box component="footer" px={"8%"}>
        <Box
          component={"div"}
          display={"flex"}
          flexDirection={{
            xs: "column",
            md: "row",
          }}
          justifyContent={"center"}
          gap={4}
          width={"100%"}
          py="24px"
        >
          {/* Name and profession */}
          <Box
            display="flex"
            flexDirection="column"
            alignItems={{ xs: "center", md: "flex-start" }}
            gap={1}
            width={{ md: "33%" }}
          >
            <Typography
              variant="h3"
              align="center"
              color="primary.main"
              fontWeight={400}
            >
              {translation.LL.hero.myName()}
            </Typography>
            <Typography variant="body2" align="center" color="text.muted">
              {translation.LL.hero.myProfession()}
            </Typography>
          </Box>
          {/* Contact information */}
          <Box
            id="contact-info"
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={2}
            width={{ md: "33%" }}
          >
            <Typography variant="h6" align="center" fontWeight={400}>
              {translation.LL.footer.contact()}
            </Typography>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="center"
              gap={2}
            >
              <GitHubIconButton />
              <LinkedInIconButton />
              <EmailIconButton />
            </Box>
          </Box>
          {/* Language selection */}
          <Box
            display="flex"
            flexDirection="column"
            alignItems={{ xs: "center", md: "flex-end" }}
            gap={2}
            width={{ md: "33%" }}
          >
            <Typography variant="h6"fontWeight={400}>
              {translation.LL.footer.language()}
            </Typography>
            <Button
              dir="ltr"
              onClick={toggleLanguage}
              variant="outlined"
              sx={{
                color: "text.primary",
              }}
              startIcon={<GlobeIcon />}
              size="small"
            >
              {languageNames.of(translation.locale)}
            </Button>
          </Box>
        </Box>

        <Divider sx={{ my: 2 }} />
        <Box
          display={"flex"}
          flexDirection={{
            xs: "column",
            md: "row",
          }}
          paddingBottom={"24px"}
          alignItems={"center"}
        >
          <Typography
            variant="subtitle1"
            display={"flex"}
            justifyContent={{ md: "flex-start", xs: "center" }}
            width={"50%"}
            alignItems={"center"}
            gap={"4px"}
          >
            {translation.LL.footer.builtWith()}
            <HeartIcon
              className="animate-pulse"
              sx={{ color: "primary.main", width: "16px", height: "16px" }}
            />
          </Typography>
          <Typography
            variant="subtitle1"
            display={"flex"}
            justifyContent={{ md: "flex-end", xs: "center" }}
            width={"50%"}
            textAlign={"center"}
          >
            © {new Date().getFullYear()} {translation.LL.hero.myName()}.{" "}
            {translation.LL.footer.rightsReserved()}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
