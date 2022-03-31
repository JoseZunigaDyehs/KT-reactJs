import { Grid, Typography } from "@mui/material";
import React from "react";

function Home() {
  return (
    <Grid container item md={8}>
      <Typography variant="h1">The Rick and Morty Workshop</Typography>
      <Typography>Hecho con cariño para el Perla Negra</Typography>
    </Grid>
  );
}

export default Home;
