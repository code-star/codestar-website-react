import React from 'react';
import compose from 'recompose/compose';
import Section from '../../../Section/Section';
import { translate, TranslationFunction } from 'react-i18next';
import styles from './VideosSection.module.scss';
import { VideoItem } from '../../../containers/EventsContainer/fetchYouTubePlaylist';
import { Typography, Button } from '@material-ui/core';
import { YOUTUBE_CODESTAR_CHANNEL_ID } from '../../../constants';
import { VideoCarousel } from '../VideoCarousel/VideoCarousel';
import { VideoDialog } from '../VideoDialog/VideoDialog';

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

export default compose<VideosSectionProps, IPropsOuter>(
  translate(['events'], { wait: true })
)(VideosSection);
