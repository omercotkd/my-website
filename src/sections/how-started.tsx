import { SectionTitle } from "@/components/section-title";
import Box from "@mui/material/Box";

export const HowIstartedSection = () => {
  return (
    <Box
      id="how-started"
      component="section"
      position="relative"
      py={12}
      display="flex"
      gap={6}
      flexDirection="column"
    >
      <SectionTitle title={"howIstarted.title"} />
    </Box>
  );
};
