import React, { useContext } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  ListItemAvatar,
  Avatar,
} from "@material-ui/core";
import MAIL_CONTEXT from "../context/mail-context";
const MailList =(props) => {
  const u= props.name ;
  var Heading = "heading";
  if (u==="home"){
    Heading= "Inbox";
  }
  else if (u=== "history"){
    Heading="History";
  }
  const { allMail, viewMail, setViewMail, setShow } = useContext(MAIL_CONTEXT);
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
                    setViewMail(item.id);
                    setShow(false);
                  }}
                >
                  <ListItemAvatar>
                    <Avatar src="/hi" alt="Venu" />
                  </ListItemAvatar>
                  <ListItemText
                    primary={item.title}
                    secondary={
                      <React.Fragment>
                        <Typography
                          component="span"
                          variant="body2"
                          color="textPrimary"
                        >
                          Ali Connors
                        </Typography>
                        {item.body}
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
