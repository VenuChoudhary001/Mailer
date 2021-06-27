import React, { useContext, useState, useEffect } from "react";
import { Typography, Avatar } from "@material-ui/core";
import MAIL_CONTEXT from "../context/mail-context";
import USER_CONTEXT from "../context/user-context";
function ViewMail() {
  const { viewMail, setViewMail } = useContext(MAIL_CONTEXT);
  const {user}=useContext(USER_CONTEXT);
  const [currentMail, setCurrentMail] = useState();
  const getData = async () => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        AuthTokenString: `${user.token}`,
      },
    };
    let response = await fetch(
      `https://flash-mailer-backend.herokuapp.com/api/send/mail/sent/${viewMail}`,requestOptions
    );
    let result = await response.json();
    let {mail}=result;
    console.log(result,"from viewmail")
     setCurrentMail(mail);
  };
  useEffect(() => {
    if (viewMail) {
      getData();
    }
  }, [viewMail]);
  if (!currentMail) {
    return <h2>Click on mails to see</h2>;
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "55vw",
          marginLeft: "45vw",
          position: "fixed",
        }}
      >
        <div className="view-mail" style={{ padding: "30px" }}>
          <div className="mail-title">
            <Typography variant="h6">{currentMail.mail.subject}</Typography>
          </div>
          <div className="mail-info ">
            <Avatar src="/hi" alt={currentMail.mail.to} />
            <Typography variant="subtitle1" className="mx-4">
              {currentMail.mail.to}
              <Typography variant="subtitle2">{new Date(currentMail.sentAt).toTimeString()}</Typography>
            </Typography>
          </div>
          <hr />
          <div className="mail-content">
            <Typography variant="body1">{currentMail.mail.body}</Typography>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewMail;
