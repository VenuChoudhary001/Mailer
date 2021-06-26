import React from "react";
import Home from "./Pages/Home/home.jsx";
import THEME from "./theme/theme.jsx";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import "./styles/home.css";
import { PROVIDER } from "./context/mail-context";
function App() {
  return (
    <div>
      <ThemeProvider theme={THEME}>
        {/* Mail context provider */}
        <PROVIDER>
          <CssBaseline />
          <Home />
        </PROVIDER>
      </ThemeProvider>
    </div>
  );
}

export default App;
