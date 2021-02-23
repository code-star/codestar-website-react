import React, { FC } from "react";
import { Card, CardContent, Theme, Typography, withStyles } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

interface Props {
  errorMessage: string;
  technicalMessage?: string;
}

const StyledCardContent = withStyles((theme: Theme) => ({
    root: {
      backgroundColor: red[500],
    },
  }))(CardContent);
  
const ErrorCard: FC<Props> = ({ errorMessage, technicalMessage }) => {
  return (
    <Card>
      <StyledCardContent>
          <Typography>{errorMessage}</Typography>
          {technicalMessage && <Typography variant="body2">{technicalMessage}</Typography>}
      </StyledCardContent>
    </Card>
  );
};

export default ErrorCard;
