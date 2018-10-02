import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@material-ui/core';

interface ITweetListProps {
  tweets: any[];
}

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
};

const TweetList = ({ tweets }: ITweetListProps) => (
  <Card>
    <CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="headline" component="h2">
          {tweets[0].user.name} tweets ...
        </Typography>

        {tweets.map((tweet, index) => (
          <div key={index} className="p-2">
            <Typography component="p">
              {`${new Date(tweet.created_at).toDateString()} ${tweet.text}`}
            </Typography>
          </div>
        ))}
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button
        size="small"
        color="primary"
        href={`https://twitter.com/${tweets[0].user.screen_name}?lang=en`}
      >
        Read More
      </Button>
    </CardActions>
  </Card>
);

export default withStyles(styles)(TweetList);
