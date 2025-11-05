import { createTheme, type Color } from "@mui/material/styles";
declare module "@mui/material/styles" {
  interface TypeBackground {
    transparent: string;
  }
  interface PaletteOptions {
    glow: Partial<Color>;
  }

  interface TypeText {
    muted: string;
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
      paper: "#1A1A1A00",
      transparent: "#0000",
    },
    text: {
      primary: "#fafafafb",
      secondary: "rgba(161, 161, 161, 0.8)",
      muted: "#a1a1a1",
    },
    grey: {
      50: "#a1a1a1ff",
      100: "#a1a1a1d1",
    },
    glow: {
      50: "rgba(139, 92, 246, 0.5)",
      100: "rgba(139, 92, 246, 0.2)",
      200: "rgba(139, 92, 246, 0.1)",
      300: "rgba(168, 85, 247, 0.1)",
      400: "rgba(168, 85, 247, 0.2)",
    },
    divider: "#895af633",
  },
  typography: {
    fontFamily: "ui-sans-serif, system-ui, sans-serif",
    h1: {
      fontSize: "72px",
      fontWeight: 400,
      lineHeight: 1.5,
    },
    h2: {
      fontSize: "48px",
      fontWeight: 400,
      lineHeight: 1.5,
    },
    h3: {
      fontSize: "24px",
      fontWeight: 500,
      lineHeight: 1.5,
      color: "var(--mui-palette-text-muted)"
    },
    h4: {
      fontSize: "24px",
      fontWeight: 400,
      lineHeight: 1.5,
    },
    h5: {
      fontSize: "18px",
      fontWeight: 400,
      lineHeight: 1.5,
    },
    h6: {
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: "18px",
      fontWeight: 400,
      lineHeight: 1.5,
      color: "var(--mui-palette-text-secondary)"
    },
    body2: {
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: 1.5,
      color: "var(--mui-palette-text-secondary)",
    },
    subtitle1: {
      fontSize: "14px",
      color: "var(--mui-palette-text-muted)",
    },
    subtitle2: {
      fontSize: "12px",
      color: "var(--mui-palette-text-muted)",
    },
    button: {
      fontSize: "1rem",
      fontWeight: 500,
      lineHeight: 1.5,
      textTransform: "none",
    },
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
        },
      },
    },
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
