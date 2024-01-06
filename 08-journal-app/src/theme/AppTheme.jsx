import { ThemeProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { purpleTheme } from "./";

export const AppTheme = ({ children }) => (
  <ThemeProvider theme={purpleTheme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);
