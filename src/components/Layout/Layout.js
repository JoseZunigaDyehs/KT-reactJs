import { Grid } from "@mui/material";
import React from "react";
import Nav from "../Nav/Nav";

function Layout({ children }) {
  return (
    <Grid>
      <Nav />
      <Grid
        container
        justifyContent="center"
        style={{ paddingTop: 24, paddingBottom: 24 }}
      >
        {children}
      </Grid>
    </Grid>
  );
}

export default Layout;
