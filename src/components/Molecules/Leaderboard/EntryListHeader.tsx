import React, { FC } from "react";
import { ListItem, Grid, Typography } from "@material-ui/core";

const EntryListHeader: FC = () => (
  <ListItem>
    <Grid container>
      <Grid item xs={2}></Grid>
      <Grid item xs>
        <Typography variant="h6">Name</Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography variant="h6">Score</Typography>
      </Grid>
    </Grid>
  </ListItem>
);

export default EntryListHeader;
