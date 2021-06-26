import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  ListItemAvatar,
  Avatar,
} from "@material-ui/core";
function MailList() {
  return (
    <>
      <div className="mail-list">
        <div className="mail-header ">
          <Typography variant="h4">Inbox</Typography>
        </div>

        <List>
          <ListItem button>
            <ListItemAvatar>
              <Avatar src="/hi" alt="Venu" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    color="textPrimary"
                  >
                    Ali Connors
                  </Typography>
                  {
                    " — I'll be in your neighborhood doing errands this…fdhfjdhfdhjjjjjjj dfadfhafhajdfhajdfhajdfhajdfhajfhjafhja lorem50"
                  }
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </div>
    </>
  );
}

export default MailList;
