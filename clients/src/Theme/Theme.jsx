import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",

    primary: {
      main: "#E11D48",
    },

    secondary: {
      main: "#FACC15",
    },

    background: {
      default: "#0F172A",
      paper: "#1E293B",
    },

    text: {
      primary: "#F8FAFC",
      secondary: "#94A3B8",
    },

    success: {
      main: "#22C55E",
    },

    error: {
      main: "#EF4444",
    },
  },

  typography: {
    fontFamily: `"Poppins", "Inter", sans-serif`,

    h1: {
      fontSize: "2.6rem",
      fontWeight: 700,
      letterSpacing: "1px",
    },

    h2: {
      fontSize: "2rem",
      fontWeight: 600,
    },

    h3: {
      fontSize: "1.5rem",
      fontWeight: 600,
    },

    body1: {
      fontSize: "1rem",
    },

    button: {
      textTransform: "none",
      fontWeight: 600,
      letterSpacing: "0.5px",
    },
  },

  shape: {
    borderRadius: 14,
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 14,
          padding: "10px 22px",
          transition: "all 0.25s ease",
        },

        containedPrimary: {
          background: "linear-gradient(135deg, #E11D48, #BE123C)",
          color: "#fff",
          "&:hover": {
            transform: "scale(1.05)",
            background: "linear-gradient(135deg, #BE123C, #881337)",
          },
        },

        containedSecondary: {
          background: "#FACC15",
          color: "#000",
          "&:hover": {
            transform: "scale(1.05)",
            background: "#EAB308",
          },
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#1E293B",
          borderRadius: 18,
          padding: "16px",
          boxShadow: "0 8px 30px rgba(0,0,0,0.4)",
        },
      },
    },

    MuiTable: {
      styleOverrides: {
        root: {
          backgroundColor: "#1E293B",
        },
      },
    },

    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: "1px solid #334155",
          color: "#F8FAFC",
        },

        head: {
          fontWeight: 700,
          fontSize: "15px",
          color: "#FACC15",
        },
      },
    },

    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          marginBottom: "6px",
          color: "#E2E8F0",

          "&:hover": {
            backgroundColor: "#334155",
          },
        },
      },
    },

    MuiIconButton: {
      styleOverrides: {
        root: {
          color: "#F8FAFC",
        },
      },
    },
  },

  spacing: 8,
});

export default theme;
