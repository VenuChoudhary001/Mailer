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
const MailList =() => {
 
  const { allMail, viewMail, setViewMail, setShow } = useContext(MAIL_CONTEXT);
  const {user}=useContext(USER_CONTEXT);
  console.log(allMail,"From mail-list")



  return (
    <>
      <div className="mail-list">
        <div className="mail-header ">
          <Typography variant="h4">Scheduled Mails</Typography>
        </div>

        <List>
          {allMail
            ? allMail.map((item) => (
                <ListItem
                  button
                  onClick={() => {
                    setViewMail(item.mail.id);
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
