import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
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
    <Container>
      <Divider sx={{ my: 2 }} />
      <Box component="footer" py={"24px"} px={"48px"}>
        <Box
          component={"div"}
          display={"flex"}
          flexDirection={{
            xs: "column",
            md: "row",
          }}
          justifyContent={{ xs: "center", md: "space-between" }}
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={1}
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
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={2}
          >
            <Typography variant="body2" align="center">
              {translation.LL.footer.contact()}:
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
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={1}
          >
            <Typography variant="body2" align="center">
              {translation.LL.footer.language()}:
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
        >
          <Typography variant="subtitle1" align="center">
            {translation.LL.footer.builtWith()}
          </Typography>
          <Typography variant="subtitle1" align="center">
            © {new Date().getFullYear()} {translation.LL.hero.myName()}. {translation.LL.footer.rightsReserved()}
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};
