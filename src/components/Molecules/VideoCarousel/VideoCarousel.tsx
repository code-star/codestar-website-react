import React, { SFC } from 'react';
import { VideoItem } from '../../../containers/EventsContainer/fetchYouTubePlaylist';
import Carousel from 'nuka-carousel';
import {
  leftControls,
  rightControls,
  bottomControls,
} from '../TeamCarousel/renderControls';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import i18n from '../../../i18n';
import styles from './VideoCarousel.module.scss';
import { formatDate } from '../../../utility/formatDate';

type VideoCarouselProps = Readonly<{
  videos: VideoItem[];
  cardWidth: number;
  onSelectVideo: (video: VideoItem) => void;
}>;

export const VideoCarousel: SFC<VideoCarouselProps> = props => {
  return (
    <Carousel
      slideWidth={`${props.cardWidth}px`}
      wrapAround
      cellAlign="left"
      slidesToScroll="auto"
      renderCenterLeftControls={leftControls}
      renderCenterRightControls={rightControls}
      renderBottomCenterControls={bottomControls}
    >
      {props.videos.map(video => (
        <Card
          key={video.id}
          className={`${styles.card} my-3`}
          onClick={() => props.onSelectVideo(video)}
        >
          <CardMedia
            className={styles.cardMedia}
            image={video.thumbnails.medium.url}
            title={video.title}
          />
          <CardContent>
            <Typography variant="headline" component="h3" title={video.title}>
              <Truncate text={video.title} limit={40} />
            </Typography>
            <p className={styles.publishedAt}>
              {formatDate(video.publishedAt, i18n.language)}
            </p>
          </CardContent>
        </Card>
      ))}
    </Carousel>
  );
};

type TruncateProps = Readonly<{
  limit: number;
  text: string;
}>;

const Truncate: SFC<TruncateProps> = ({ limit, text }) => {
  const textToRender =
    text.length > limit ? `${text.substr(0, limit)}...` : text;
  return <>{textToRender}</>;
};
