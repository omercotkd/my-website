import "./App.css";
import { Navbar } from "@/components/navbar";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { theme } from "@/theme";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
        <Navbar />
    </MuiThemeProvider>
  );
}

export default App;
