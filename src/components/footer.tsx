import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useI18nContext } from "@/i18n/i18n-react";
import Divider from "@mui/material/Divider";
import {
  GitHubIconButton,
  LinkedInIconButton,
  EmailIconButton,
} from "@/components/buttons/contact";

export const Footer = () => {
  const translation = useI18nContext();

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
            gap={1}
            width={{ md: "33%" }}
          >
            <Typography variant="h6" align="center" fontWeight={400}>
              {translation.LL.footer.language()}
            </Typography>
            <Box>lb</Box>
          </Box>
        </Box>

        <Divider sx={{ my: 2 }} />
        <Box
          display={"flex"}
          flexDirection={{
            xs: "column",
            md: "row",
          }}
          justifyContent={{
            xs: "center",
            md: "space-between",
          }}
          paddingBottom={"24px"}
        >
          <Typography variant="subtitle1" textAlign={{ md: "left", xs: "center" }} width={{ md: "50%" }}>
            {translation.LL.footer.builtWith()}
          </Typography>
          <Typography variant="subtitle1" textAlign={{ md: "right", xs: "center" }} width={{ md: "50%" }}>
            © {new Date().getFullYear()} {translation.LL.hero.myName()}.{" "}
            {translation.LL.footer.rightsReserved()}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
