import { createTheme } from "@mui/material/styles";

export const defaultTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#b5a7df",
    },
    secondary: {
      main: "#76c9aa",
    },
    success: {
      main: "#19d56a",
    },
    background: {
      paper: "#101713",
      default: "#080d0e",
    },
    text: {
      primary: "#d0d9d2",
      secondary: "#98a69c",
      disabled: "#69766e",
    },
    divider: "#2a263c",
  },
  shape: {
    borderRadius: 10,
  },
  typography: {
    fontFamily: 'Inter, system-ui, -apple-system, "Segoe UI", sans-serif',
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
    caption: {
      fontSize: "0.6875rem",
      fontWeight: 700,
      letterSpacing: "0.06em",
      color: "#98a69c",
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          borderColor: "#2a263c",
          boxShadow: "none",
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        size: "small",
        fullWidth: true,
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: "#18231b",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#243329",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#536b59",
          },
        },
        input: {
          fontSize: "0.875rem",
          "&::placeholder": {
            color: "#98a69c",
            opacity: 1,
          },
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          minHeight: 40,
        },
        outlined: {
          borderStyle: "dashed",
          borderColor: "#49415f",
          color: "#b5a7df",
          "&:hover": {
            backgroundColor: "#1b2020",
            borderColor: "#b5a7df",
          },
        },
        containedPrimary: {
          backgroundColor: "#1b3025",
          color: "#c6b8eb",
          "&:hover": {
            backgroundColor: "#284535",
          },
        },
      },
    },
    MuiIconButton: {
      defaultProps: {
        size: "small",
      },
      styleOverrides: {
        root: {
          color: "#98a69c",
          borderRadius: 8,
          "&:hover": {
            color: "#efaaa2",
            backgroundColor: "#30201f",
          },
        },
      },
    },
  },
});
