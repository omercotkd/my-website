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

  return (
    <Box
      component="div"
      className="animate-bounce"
      sx={{
        opacity: visible ? 1 : 0,
      }}
    >
      <Box
        component="div"
        width="22px"
        height="40px"
        border="2px solid"
        borderColor="glow.50"
        borderRadius="3.40282e38px"
        display="flex"
        justifyContent="center"
      >
        <Box
          component="div"
          width="4px"
          height="14px"
          marginTop="10px"
          sx={{
            backgroundColor: "primary.main",
          }}
          className="animate-float"
          borderRadius="35%"
        />
      </Box>
    </Box>
  );
};
