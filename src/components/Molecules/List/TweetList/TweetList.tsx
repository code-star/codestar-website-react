import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
  CardHeader,
  Avatar,
} from '@material-ui/core';
import { getResponsiveImageUrl } from '../../../../ResponsiveImage/ResponsiveImage';
import styles from './TweetList.module.scss';

interface ITweetListProps {
  tweets: any[];
  eventDate: string;
  eventImage: string;
  eventName: string;
  children?: React.ReactNode;
}

const TweetList = ({
  tweets,
  eventDate,
  eventImage,
  eventName,
  children,
}: ITweetListProps) => (
  <Card raised className={styles.card}>
    <CardHeader
      avatar={
        <Avatar
          src={tweets[0].user.profile_image_url_https}
          aria-label="Speaker Twitter Avatar"
        />
      }
      title={tweets[0].user.name}
      subheader={eventDate}
    />
    <CardMedia image={eventImage} className={styles.media} title={eventName} />
    <CardContent>
      {tweets.map(tweet => (
        <div key={tweet.id} className="p-2">
          <Typography component="p">
            <a
              href={`https://twitter.com/${tweet.user.screen_name}/status/${
                tweet.id_str
              }`}
            >
              <div className={styles.prefix}>
                <img
                  src={getResponsiveImageUrl('/images/events/twitter', 30)}
                  className="mr-2"
                />
                {new Date(tweet.created_at).toDateString()}
              </div>
              {tweet.text}
            </a>
          </Typography>
        </div>
      ))}
    </CardContent>
    <CardActions>
      {children}
      <Button
        size="small"
        color="secondary"
        href={`https://twitter.com/${tweets[0].user.screen_name}?lang=en`}
      >
        About {tweets[0].user.name}
      </Button>
    </CardActions>
  </Card>
);

export default TweetList;
