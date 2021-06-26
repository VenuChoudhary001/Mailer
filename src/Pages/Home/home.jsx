import React, { useContext } from "react";
import Sidebar from "../../components/sidebar";
import Header from "../../components/header";
import { Grid, Typography } from "@material-ui/core";
import MailList from "../../components/mail-list";
import ViewMail from "../../components/view-mail";
import NewMail from "../../components/newMail";
import MAIL_CONTEXT from "../../context/mail-context";
function Home() {
  const { show } = useContext(MAIL_CONTEXT);
  return (
    <>
      <div className="main">
        <Header />
        <div className="grid-container my-1">
          <Sidebar />

          <MailList />
          {show ? <NewMail /> : <ViewMail />}
        </div>
      </div>
    </>
  );
}

export default Home;
