import React from 'react';
import {
  Card,
  CardContent,
  CardActions,
  Button,
  CardMedia,
  CardHeader,
  Avatar,
  Typography,
} from '@material-ui/core';
import { getResponsiveImageUrl } from '../../../../ResponsiveImage/ResponsiveImage';
import styles from './TweetList.module.scss';
import {
  ITweet,
  ITwitterUser,
} from '../../../../containers/EventsContainer/EventsContainer.interfaces';

interface ITweetListProps {
  tweets: { data: ITweet[]; author: ITwitterUser } | null;
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
}: ITweetListProps) => {
  return (
    <Card raised className={styles.card}>
      {tweets && tweets.author && (
        <CardHeader
          avatar={
            <Avatar
              src={tweets.author.profile_image_url}
              aria-label="Speaker Twitter Avatar"
            />
          }
          title={tweets.author.name}
          subheader={eventDate}
        />
      )}
      <CardMedia
        image={eventImage}
        className={styles.media}
        title={eventName}
      />
      <CardContent>
        {tweets &&
          tweets.data.map(tweet => (
            <div key={tweet.id} className="p-2">
              <a
                href={`https://twitter.com/${tweets.author.username}/status/${
                  tweet.id
                }`}
              >
                <Typography component="div" className={styles.prefix}>
                  <img
                    alt=""
                    src={getResponsiveImageUrl('/images/events/twitter', 30)}
                    className="mr-2"
                  />
                  {new Date(tweet.created_at).toDateString()}
                </Typography>
                <Typography component="p">{tweet.text}</Typography>
              </a>
            </div>
          ))}
      </CardContent>
      <CardActions>
        {children}
        {tweets && tweets.author && (
          <Button
            size="small"
            color="secondary"
            href={`https://twitter.com/${tweets.author.username}?lang=en`}
          >
            About {tweets.author.name}
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default TweetList;
