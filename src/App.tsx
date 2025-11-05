import "./App.css";
import { Navbar } from "@/components/navbar";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { theme } from "@/theme";
import { I18nContextProvider } from "@/contexts/i18n";
import { HeroSection } from "./sections/hero";
import { AboutSection } from "./sections/about";
import { ProgrammingLanguagesSection } from "./sections/programming-languages";
import { ToolsSection } from "./sections/tools";
import { DBsSection } from "./sections/dbs";
import { CertificatesSection } from "./sections/certificates";
import { AboutMeQaSection } from "./sections/about-qa";
import { ExperienceSection } from "./sections/experience";
import { HowStartedSection } from "./sections/how-started";
import { Footer } from "./components/footer";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <I18nContextProvider>
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ProgrammingLanguagesSection />
        <ToolsSection />
        <DBsSection />
        <CertificatesSection />
        <AboutMeQaSection />
        <ExperienceSection />
        <HowStartedSection />
        <Footer />
      </I18nContextProvider>
    </MuiThemeProvider>
  );
}

export default App;
