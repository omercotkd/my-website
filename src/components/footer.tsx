import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useI18nContext } from "@/i18n/i18n-react";
import Divider from "@mui/material/Divider";

export const Footer = () => {
  const translation = useI18nContext();

  return (
    <Box component="footer" width="100%">
      <Box
        component={"div"}
        display={"flex"}
        flexDirection={{
          xs: "column",
          md: "row",
        }}
        justifyContent={
            { xs: "center", md: "space-between"}
        }
      >
        <Box>
          <Typography variant="h6" align="center">
            {translation.LL.hero.myName()}
          </Typography>
          <Typography variant="h6" align="center">
            {translation.LL.hero.myProfession()}
          </Typography>
        </Box>
        <Box>
          <Typography variant="body2" align="center">
            {translation.LL.footer.contact()}:
          </Typography>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="center"
            gap={2}
          >
            <Box>bt1</Box>
            <Box>bt2</Box>
            <Box>bt3</Box>
          </Box>
        </Box>
        <Box>
          <Typography variant="body2" align="center">
            {translation.LL.footer.language()}:
          </Typography>
          <Box>lb</Box>
        </Box>
      </Box>

      <Divider sx={{ my: 2 }} />
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <Typography variant="body2" color="textSecondary" align="center">
          {translation.LL.footer.builtWith()}
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
          {translation.LL.footer.rightsReserved()}
        </Typography>
      </Box>
    </Box>
  );
};
