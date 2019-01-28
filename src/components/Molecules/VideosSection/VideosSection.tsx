import React, { SFC } from 'react';
import compose from 'recompose/compose';
import Section from '../../../Section/Section';
import { translate, TranslationFunction } from 'react-i18next';
import styles from './VideosSection.module.scss';
import { VideoItem } from '../../../containers/EventsContainer/fetchYouTubePlaylist';
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  Dialog,
  DialogContent,
  DialogActions,
  Button,
} from '@material-ui/core';
import Carousel from 'nuka-carousel';
import {
  leftControls,
  rightControls,
  bottomControls,
} from '../TeamCarousel/renderControls';
import i18n from '../../../i18n';
import { YOUTUBE_CODESTAR_CHANNEL_ID } from '../../../constants';

const formatDate = (date: Date, language: string) => {
  const locale = language === 'nl' ? 'nl-NL' : 'en-US';
  return new Date(date).toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

interface IPropsInner {
  t: TranslationFunction;
}

interface IPropsOuter {
  scrollname: string;
  videos: VideoItem[];
}

type VideosSectionProps = IPropsInner & IPropsOuter;

type VideosSectionState = Readonly<{
  selectedVideo: VideoItem | false;
}>;

export class VideosSection extends React.Component<
  VideosSectionProps,
  VideosSectionState
> {
  constructor(props: VideosSectionProps) {
    super(props);
    this.state = {
      selectedVideo: false,
    };
  }

  public render() {
    const { videos, scrollname, t } = this.props;
    if (!videos.length) {
      return null;
    }

    const firstVideoThumbnail = videos[0].thumbnails.maxres.url;
    return (
      <Section scrollname={scrollname} className={styles.section}>
        <img
          className={styles.imageFullscreen}
          src={firstVideoThumbnail}
          alt="Person receiving training at Codestar"
        />
        <div className="row">
          <div className="col-12">
            <Typography
              align="center"
              variant="display4"
              className={styles.sectionTitle}
            >
              {t('VIDEOS')}
            </Typography>
            <div className={styles.subscribe}>
              <Button
                className={styles.subscribeButton}
                color="primary"
                variant="contained"
                href={`https://www.youtube.com/channel/${YOUTUBE_CODESTAR_CHANNEL_ID}`}
              >
                {t('SUBSCRIBE')}
              </Button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className={styles.carouselWrap}>
              <VideoCarousel
                cardWidth={300}
                videos={videos}
                onSelectVideo={this.onSelectVideo}
              />
            </div>
          </div>
        </div>
        <VideoDialog
          video={this.state.selectedVideo}
          fullScreen={false}
          onClose={() => this.onSelectVideo(false)}
          t={t}
        />
      </Section>
    );
  }

  private onSelectVideo = (selectedVideo: VideoItem | false) => {
    this.setState({
      selectedVideo,
    });
  };
}

type VideoCarouselProps = Readonly<{
  videos: VideoItem[];
  cardWidth: number;
  onSelectVideo: (video: VideoItem) => void;
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

type VideoDialogProps = Readonly<{
  video: VideoItem | false;
  fullScreen: boolean;
  onClose: () => void;
  t: TranslationFunction;
}>;

const VideoDialog: SFC<VideoDialogProps> = ({
  video,
  fullScreen,
  onClose,
  t,
}) => {
  const content =
    video !== false ? (
      <>
        <DialogContent style={{ overflow: 'visible' }}>
          <h1>{video.title}</h1>
        </DialogContent>
        <iframe
          className={styles.videoFrame}
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${video.id}`}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        />
        <DialogContent>
          {video.description.length ? (
            <div className={styles.dialogDescription}>
              {video.description.map(paragraph => (
                <p>{paragraph}</p>
              ))}
            </div>
          ) : null}
          <div className={styles.publishedText}>
            {t('PUBLISHED_ON')} {formatDate(video.publishedAt, i18n.language)}
          </div>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={onClose} color="primary">
            {t('EVENTS_CLOSE_BUTTON')}
          </Button>
        </DialogActions>
      </>
    ) : (
      <>-No video selected-</>
    );

  return (
    <Dialog
      fullScreen={fullScreen}
      open={video !== false}
      onClose={onClose}
      scroll={fullScreen ? 'paper' : 'body'}
    >
      {content}
    </Dialog>
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

export default compose<VideosSectionProps, IPropsOuter>(
  translate(['events'], { wait: true })
)(VideosSection);
