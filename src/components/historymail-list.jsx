import React, { useContext} from "react";
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
const HistoryMailList =() => {
 
  const { allMail, setViewMail, setShow } = useContext(MAIL_CONTEXT);
  // const {user=useContext(USER_CONTEXT);




  return (
    <>
      <div className="mail-list">
        <div className="mail-header ">
          <Typography variant="h4">History</Typography>
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

export default HistoryMailList;
