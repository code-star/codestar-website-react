import { VideoItem } from '../../../containers/EventsContainer/fetchYouTubePlaylist';
import { TranslationFunction } from 'i18next';
import React, { SFC } from 'react';
import {
  DialogContent,
  DialogActions,
  Button,
  Dialog,
} from '@material-ui/core';
import { formatDate } from '../../../utility/formatDate';
import i18n from '../../../i18n';
import styles from './VideoDialog.module.scss';

type VideoDialogProps = Readonly<{
  video: VideoItem | false;
  fullScreen: boolean;
  onClose: () => void;
  t: TranslationFunction;
}>;

export const VideoDialog: SFC<VideoDialogProps> = ({
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
              {video.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
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
