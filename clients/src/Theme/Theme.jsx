import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#800020",
      light: "#A52A2A",
      dark: "#4B0016",
      contrastText: "#FFF8E7",
    },

    secondary: {
      main: "#D4AF37",
      light: "#FFD700",
      dark: "#AA8B00",
      contrastText: "#3E2723",
    },

    background: {
      default: "#FDF5E6",
      paper: "#FFF3E0",
    },

    text: {
      primary: "#3E2723",
      secondary: "#6D4C41",
    },

    success: {
      main: "#43A047",
      light: "#66BB6A",
      dark: "#2E7D32",
      contrastText: "#FFFFFF",
    },

    error: {
      main: "#E53935",
      light: "#EF5350",
      dark: "#B71C1C",
      contrastText: "#FFFFFF",
    },
  },

  typography: {
    fontFamily: `"Poppins", "Roboto", sans-serif`,
    h1: { fontSize: "2.5rem", fontWeight: 700, color: "#800020" },
    h2: { fontSize: "2rem", fontWeight: 600, color: "#800020" },
    h3: { fontSize: "1.5rem", fontWeight: 600 },
    body1: { fontSize: "1rem", color: "#3E2723" },
    body2: { fontSize: "0.875rem", color: "#6D4C41" },
    button: { textTransform: "none", fontWeight: 600 },
  },

  shape: {
    borderRadius: 16,
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          padding: "12px 24px",
          transition: "all 0.3s ease",
          fontWeight: 600,
          color: "Maroon",
          boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: "0 6px 12px rgba(0,0,0,0.25)",
          },
        },
        containedPrimary: {
          backgroundColor: "Maroon",
          color: "MintCream",
          "&:hover": { backgroundColor: "#4B0016" },
        },
        containedSecondary: {
          backgroundColor: "#D4AF37",
          color: "#3E2723",
          "&:hover": { backgroundColor: "#AA8B00" },
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          backgroundColor: "#FFF3E0",
          boxShadow: "0px 8px 24px rgba(0,0,0,0.15)",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: "0px 12px 30px rgba(0,0,0,0.25)",
          },
        },
      },
    },

    MuiGrid: {
      styleOverrides: {
        root: {
          padding: "16px",
        },
      },
    },

    MuiTypography: {
      styleOverrides: {
        h1: { letterSpacing: "1px" },
        h2: { letterSpacing: "0.5px" },
        body1: { lineHeight: 1.6 },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          backgroundColor: "#FDF5E6",
          padding: "16px",
          boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
        },
      },
    },
  },

  spacing: 8,
});

export default theme;
