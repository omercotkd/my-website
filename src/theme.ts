import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypeBackground {
    transparent: string;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    hover: true; // Declare your custom variant
  }
}

export const theme = createTheme({
  cssVariables: true,
  palette: {
    mode: "dark",
    primary: {
      main: "#8B5CF6",
      light: "#A855F7",
      dark: "#7C3AED",
    },
    background: {
      default: "#0D0D0D",
      paper: "#1A1A1A",
      transparent: "#0000",
    },
    text: {
      primary: "rgba(250, 250, 250, 0.985)",
      secondary: "rgba(250, 250, 250, 0.708)",
    },
    grey: {
      50: "#a1a1a1ff",
      100: "#a1a1a1d1",
    },
    divider: "rgba(139, 92, 246, 0.2)",
  },
  typography: {
    
    fontFamily: "Inter, system-ui, -apple-system, sans-serif",
    h1: {
      fontSize: "3.5rem",
      fontWeight: 500,
      lineHeight: 1.5,
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 500,
      lineHeight: 1.5,
    },
    h3: {
      fontSize: "1.875rem",
      fontWeight: 500,
      lineHeight: 1.5,
    },
    h4: {
      fontSize: "1.25rem",
      fontWeight: 500,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.5,
    },
    button: {
      fontSize: "1rem",
      fontWeight: 500,
      lineHeight: 1.5,
      textTransform: "none",
    }
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      // styleOverrides: {
      //   root: {
      //     borderRadius: 12,
      //     padding: "10px 24px",
      //   },
      // },
      variants: [
        {
          props: { variant: "hover", color: "primary" },
          style: {
            backgroundColor: "transparent",
            cursor: "unset",
            "&:hover": {
              backgroundColor: "#A855F7",
            },
          },
        },
      ],
    },
    MuiTypography: {
      defaultProps: {
        style: {
          textDecoration: "none",
        }
      }
    }
    // MuiCard: {
    //   styleOverrides: {
    //     root: {
    //       backgroundImage: "none",
    //       borderRadius: 12,
    //     },
    //   },
    // },
  },
  
});
