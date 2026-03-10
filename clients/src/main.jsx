import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Theme/Theme.jsx";
import CssBaseline from "@mui/material/CssBaseline";
import { UserProvider } from "./Context/UserContext.jsx";
import { BrowserRouter } from "react-router-dom";
import { MenuProvider } from "./Context/MenuContext.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <MenuProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
          </ThemeProvider>
        </MenuProvider>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>
);
