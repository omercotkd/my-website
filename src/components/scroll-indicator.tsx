import { useEffect, useState } from "react";
import Box from "@mui/material/Box";

export const ScrollIndicator = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const threshold = 20;
    const onScroll = () => {
      setVisible(window.scrollY <= threshold);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  if (!visible) return null;

  return (
    <Box
      component="div"
      position="absolute"
      bottom="32px"
      left="50%"
      sx={{
        transform: "transalteX(-50%)",
      }}
      className="animate-bounce"
    >
      <Box
        component="div"
        width="24px"
        height="40px"
        border="1px solid"
        borderColor="border.main"
        borderRadius="40%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          component="div"
          width="6px"
          height="12px"
          sx={{
            backgroundColor: "primary.main",
          }}
          className="animate-float"
          borderRadius="50%"
        />
      </Box>
    </Box>
  );
};
