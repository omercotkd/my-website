import "./App.css";
import { Navbar } from "@/components/navbar";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { theme } from "@/theme";
import { I18nContextProvider } from "@/contexts/i18n";
import { HeroSection } from "./sections/hero";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <I18nContextProvider>
        <Navbar />
        <HeroSection />
      </I18nContextProvider>
    </MuiThemeProvider>
  );
}

export default App;
