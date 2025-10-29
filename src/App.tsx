import "./App.css";
import { Navbar } from "@/components/navbar";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { theme } from "@/theme";
import { I18nContextProvider } from "@/contexts/i18n";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <I18nContextProvider>
        <Navbar />
      </I18nContextProvider>
    </MuiThemeProvider>
  );
}

export default App;
