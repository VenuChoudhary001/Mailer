import React, { useContext } from "react";
import Sidebar from "../../components/sidebar";
import Header from "../../components/header";
import THEME from "../../theme/theme.jsx";
import MailList from "../../components/mail-list";
import ViewMail from "../../components/view-mail";
import NewMail from "../../components/newMail";
import MAIL_CONTEXT from "../../context/mail-context";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import "../../styles/home.css";
// import { Typography } from "@material-ui/core";
function Home(props) {
  const u=props.u;
  const { show } = useContext(MAIL_CONTEXT);
  return (
    <>
      <ThemeProvider theme={THEME}>
        <CssBaseline />
        <div className="main">
          <Header />
          <div className="grid-container my-1">
            <Sidebar />

            <MailList name={u}/>
       
            {show ? <NewMail /> : <ViewMail />}
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default Home;
