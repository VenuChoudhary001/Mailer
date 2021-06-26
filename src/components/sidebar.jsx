import React, { useContext } from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

import HomeIcon from "@material-ui/icons/Home";
import HistoryIcon from "@material-ui/icons/History";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import MAIL_CONTEXT from "../context/mail-context";
import { Link } from "react-router-dom";

function Sidebar() {
  const { setShow } = useContext(MAIL_CONTEXT);
  return (
    <div className="side-bar">
      <List>
        <ListItem button>
          <ListItemIcon>
            <Link to="/home">
              <HomeIcon />
            </Link>
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Link to="/history">
              <HistoryIcon />
            </Link>
          </ListItemIcon>
          <Link to="/history">
            <ListItemText primary="History" />
          </Link>
        </ListItem>
        <ListItem button onClick={() => setShow(true)}>
          <ListItemIcon>
            <AddCircleIcon />
          </ListItemIcon>
          <ListItemText primary="New Mail" />
        </ListItem>
      </List>
    </div>
  );
}

export default Sidebar;
