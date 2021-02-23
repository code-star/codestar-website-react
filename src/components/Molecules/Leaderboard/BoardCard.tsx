import React, { FC } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Theme,
  withStyles,
} from "@material-ui/core";

export const StyledCard = withStyles(() => ({
  root: {
    backgroundColor: "transparent",
    marginBottom: "1rem"
  },
}))(Card);

export const StyledCardHeader = withStyles((theme: Theme) => ({
  root: {
    // TODO orange?_
    backgroundColor: theme.palette.primary.dark,
    // textAlign: "center",
  },
  title: {
    color: "black",
    fontFamily: "Vibrocentric-Regular, serif",
  },
}))(CardHeader);

export const StyledCardContent = withStyles(() => ({
  root: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "white",
    "& h6": {
      color: "white",      
    }
  },
}))(CardContent);

const BoardCard: FC = ({ children }) => {
  return (
    <StyledCard>
      <StyledCardHeader title="LEADERBOARD" />
      <StyledCardContent>{children}</StyledCardContent>
    </StyledCard>
  );
};

export default BoardCard;
