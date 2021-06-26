import React from "react";
import { AppBar, Grid, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

function Header() {
  return (
    <nav className="custom-navbar ">
      {/* <ul  style={{textDecoration: "none"}}>
        <li> */}
          <h2>Mailer</h2>
        {/* </li>
      </ul> */}
    </nav>
  );
}

export default Header;
