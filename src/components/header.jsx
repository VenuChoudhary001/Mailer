import React from "react";
import { AppBar, Grid, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

function Header() {
  return (
    <nav className="custom-navbar ">
      <ul>
        <li>
          <h3>Mailer</h3>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
