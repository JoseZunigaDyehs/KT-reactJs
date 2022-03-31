import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Grid container item justifyContent="space-between">
        <Link to="/">Home</Link>
        <Link to="/characters">Characters</Link>
      </Grid>
    </nav>
  );
}

export default Nav;
