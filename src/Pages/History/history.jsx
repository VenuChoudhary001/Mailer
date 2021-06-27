import React, { useContext } from "react";
import Sidebar from "../../components/sidebar";
import Header from "../../components/header";
import THEME from "../../theme/theme.jsx";
import HistoryMailList from "../../components/historymail-list";
import ViewMail from "../../components/view-mail";
import NewMail from "../../components/newMail";
import MAIL_CONTEXT from "../../context/mail-context";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import "../../styles/home.css";
// import { Typography } from "@material-ui/core";
function History() {
  
  const { show } = useContext(MAIL_CONTEXT);
  return (
    <>
      <ThemeProvider theme={THEME}>
        <CssBaseline />
        <div className="main">
          <Header />
      </div>
          <div className="grid-container" >
            <Sidebar style={{position: "fixed"}}/>
     
            <HistoryMailList />
       
            {show ? <NewMail /> : <ViewMail />}
         
        </div>
      </ThemeProvider>
    </>
  );
}

export default History;
