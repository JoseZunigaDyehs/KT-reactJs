import { Grid } from "@mui/material";
import React from "react";
import Nav from "../Nav/Nav";

function Layout({ children }) {
  return (
    <Grid>
      <Nav />
      <Grid container justifyContent="center">
        {children}
      </Grid>
    </Grid>
  );
}

export default Layout;
