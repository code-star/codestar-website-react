import React, { FC } from "react";
import {
  ListItem,
  Grid,
  Typography,
  withStyles,
  Theme,
  Tooltip,
} from "@material-ui/core";
// import { Entry } from "../hooks/Entry.type";

interface Props {
  index: number;
  entry: any; // Entry;
}

const EntryTypography = withStyles((theme: Theme) => ({
  body1: {
    // fontWeight: "bold",
    fontFamily: "Vibrocentric-Regular, serif",
  },
  body2: {
    fontFamily: "Vibrocentric-Regular, serif",
    fontSize: "70%",
  },
}))(Typography);

const formatDate = (input: string) => {
  const date = new Date(input);
  const formatted = new Intl.DateTimeFormat("nl-NL", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  }).format(date);
  return formatted;
};

const getMedal = (index: number): string => {
  if(index === 1) {
    return "🥇"
  }
  if(index === 2) {
    return "🥈"
  }
  if(index === 3) {
    return "🥉"
  }
  return "";
}

const EntryListItem: FC<Props> = ({ index, entry: { name, date, score } }) => (
  <ListItem>
    <Grid container wrap="nowrap">
      <Grid item xs={2}>
        {index}{getMedal(index)}
      </Grid>
      <Grid item xs zeroMinWidth>
        <Tooltip title={name}>
          <EntryTypography noWrap>{name}</EntryTypography>
        </Tooltip>
        <EntryTypography variant="body2">{formatDate(date)}</EntryTypography>
      </Grid>
      <Grid item xs={3}>
        {score}
      </Grid>
    </Grid>
  </ListItem>
);

export default EntryListItem;
