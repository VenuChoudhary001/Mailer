import React, { useContext } from "react";
import {
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  Button,
  Typography,
  ListItemText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import HomeIcon from "@material-ui/icons/Home";
import HistoryIcon from "@material-ui/icons/History";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import MAIL_CONTEXT from "../context/mail-context";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  drawer: {
    // position: "fixed",
    width: "20px",
    // height: "100%",
    // zIndex: "-1",
    // top: "100px",
  },
}));
function Sidebar() {
  const { setShow } = useContext(MAIL_CONTEXT);
  return (
    <div className="side-bar">
      <List>
        <Link className="Link" to="/home">
        <ListItem button>
              <ListItemIcon>
              <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
        </ListItem>
        </Link>
          <Link className="Link" to="/history">
        <ListItem button>
              <ListItemIcon>
              <HistoryIcon />
              </ListItemIcon>
              <ListItemText primary="History" />
        </ListItem>
        </Link>
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
