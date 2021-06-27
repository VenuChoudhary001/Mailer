import React, { useContext, useEffect } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  ListItemAvatar,
  Avatar,
} from "@material-ui/core";
import MAIL_CONTEXT from "../context/mail-context";
import USER_CONTEXT from "../context/user-context";
const MailList =(props) => {
  const u= props.name ;
  var Heading = "heading";
  if (u==="home"){
    Heading= "Scheduled Mails";
  }
  else if (u=== "history"){
    Heading="History";
  }
  const { allMail,  setViewMail, setShow } = useContext(MAIL_CONTEXT);
  const {user}=useContext(USER_CONTEXT);
const getData = async () => {
  console.log(user.token);
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "AuthTokenString": `${user.token}`,
    },
  };
 
   let response = await fetch(
    "https://flash-mailer-backend.herokuapp.com/api/send/mail/sent",
    requestOptions
  );
  console.log(response);
  let result = await response.json();
  console.log(result);
 
  
};
  useEffect(()=>{
    if(user.token){

      getData();
      console.log("mail list")
    }
  })



  return (
    <>
      <div className="mail-list">
        <div className="mail-header ">
          <Typography variant="h4">{Heading}</Typography>
        </div>

        <List>
          {allMail
            ? allMail.map((item) => (
                <ListItem
                  button
                  onClick={() => {
                    setViewMail(item._id);
                    setShow(false);
                  }}
                >
                  <ListItemAvatar>
                    <Avatar src="/hi" alt={item.mail.to} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={item.mail.subject}
                    secondary={
                      <React.Fragment>
                        <Typography
                          component="span"
                          variant="body2"
                          color="textPrimary"
                        >
                          {/* Ali Connors */}
                        {item.mail.body}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
              ))
            : null}
        </List>
      </div>
    </>
  );
}

export default MailList;
