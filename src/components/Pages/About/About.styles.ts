import {createStyles, Theme} from "@material-ui/core";
import grey from "@material-ui/core/colors/grey";
import blue from "@material-ui/core/colors/blue";

export const styles = (theme: Theme) => createStyles({
  text: {
    color: 'white',
    "&& h2": {
      fontSize: "2rem",
      fontWeight: 500
    }
  },
  teamSection: {
    backgroundColor: grey[200]
  },
  siteSection: {
    backgroundColor: blue[900],
    color: grey[200]
  },
  link: {
    color: theme.palette.primary.main
  }
});
