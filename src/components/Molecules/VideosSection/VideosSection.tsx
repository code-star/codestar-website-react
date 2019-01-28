import React, { SFC } from 'react';
import compose from 'recompose/compose';
import Section from '../../../Section/Section';
import { translate, TranslationFunction } from 'react-i18next';
import styles from './VideosSection.module.scss';
import { VideoItem } from '../../../containers/EventsContainer/fetchYouTubePlaylist';
import { Typography, Card, CardMedia, CardContent } from '@material-ui/core';
import Carousel from 'nuka-carousel';
import {
  leftControls,
  rightControls,
  bottomControls,
} from '../TeamCarousel/renderControls';

interface IPropsInner {
  t: TranslationFunction;
}

interface IPropsOuter {
  scrollname: string;
  videos: VideoItem[];
}

export const VideosSection: SFC<IPropsInner & IPropsOuter> = ({
  t,
  scrollname,
  videos,
}) => {
  if (!videos.length) {
    return null;
  }

  const firstVideoThumbnail = videos[0].thumbnails.maxres.url;
  return (
    <Section scrollname={scrollname} className={styles.section}>
      <img
        className={styles.fullscreen}
        src={firstVideoThumbnail}
        alt="Person receiving training at Codestar"
      />
      <div className="row">
        <div className="col-12">
          <Typography
            align="center"
            variant="display4"
            className={styles.title}
          >
            {t('VIDEOS')}
          </Typography>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className={styles.carouselWrap}>
            <VideoCarousel cardWidth={300} videos={videos} />
          </div>
        </div>
      </div>
    </Section>
  );
};

type VideoCarouselProps = Readonly<{
  videos: VideoItem[];
  cardWidth: number;
}>;

const VideoCarousel: SFC<VideoCarouselProps> = props => {
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
          onClick={console.log}
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

export default compose<IPropsInner & IPropsOuter, IPropsOuter>(
  translate(['events'], { wait: true })
)(VideosSection);
