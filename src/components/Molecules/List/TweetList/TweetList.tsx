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
        {tweets.map(tweet => {
          return (
            <div key={tweet.id} className="p-2">
              <Typography component="p">
                <a
                  href={`https://twitter.com/${tweet.user.screen_name}/status/${
                    tweet.id_str
                  }`}
                >
                  <span className="text-info">{`${new Date(
                    tweet.created_at
                  ).toDateString()} `}</span>
                  {`${tweet.text}`}
                </a>
              </Typography>
            </div>
          );
        })}
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
