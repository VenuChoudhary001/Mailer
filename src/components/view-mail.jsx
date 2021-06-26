import React, { useContext, useState, useEffect } from "react";
import { Typography, Avatar } from "@material-ui/core";
import MAIL_CONTEXT from "../context/mail-context";
function ViewMail() {
  const { viewMail, setViewMail } = useContext(MAIL_CONTEXT);
  const [currentMail, setCurrentMail] = useState();
  const getData = async () => {
    let response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${viewMail}`
    );
    let result = await response.json();
    setCurrentMail(result);
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
    <div style={{display: "flex" ,justifyContent: "center", width: "55vw" ,marginLeft:"45vw" ,position:"fixed"}}>
    <div className="view-mail" style={{padding:"30px" }}>
      <div className="mail-title">
        <Typography variant="h6">{currentMail.title}</Typography>
      </div>
      <div className="mail-info ">
        <Avatar src="/hi" alt="TOI" />
        <Typography variant="subtitle1" className="mx-4">
          Twitter
          <Typography variant="subtitle2">07:46</Typography>
        </Typography>
      </div>
      <hr />
      <div className="mail-content">
        <Typography variant="body1">{currentMail.body}</Typography>
      </div>
    </div>
    </div>
    </>
  );
}

export default ViewMail;
