import { Grid } from "@material-ui/core";
import React from "react";
import { Fragment } from "react";
import ApplicationBar from "../../features/app-bar/ApplicationBar";
import "./App.css";

function App() {
  return (
    <Fragment>
      <ApplicationBar />
      <Grid container direction="row" justify="center" alignItems="center">
        Welcome... trails...
      </Grid>
    </Fragment>
  );
}

export default App;
