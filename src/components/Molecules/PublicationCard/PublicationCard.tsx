import React, { FC } from 'react';
import { translate, TranslationFunction } from 'react-i18next';
import {
  createStyles,
  CardContent,
  Card,
  CardHeader,
  CardMedia,
  CardActions,
  Button,
  Typography,
} from '@material-ui/core';
import compose from 'recompose/compose';
import { Theme, withStyles } from '@material-ui/core/styles';
import SanitizedHTML from 'react-sanitized-html';
import i18n from '../../../i18n';
import { IPublication } from '../../../publicationsService';
import { ShareButtons } from '../../../ShareButtons/ShareButtons';

type PropsInner = {
  classes: any;
  t: TranslationFunction;
};

type PropsOuter = {
  publication: IPublication;
};

type Props = PropsInner & PropsOuter;

const StyledCard = withStyles({
  root: {
    marginBottom: '20px',
  },
})(Card);

const styles = ({ palette }: Theme) =>
  createStyles({
    media: {
      height: 0,
      paddingTop: '15%',
    },
    title: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    contentWrapper: {
      color: palette.text.primary,
      maxHeight: '300px',
      overflowY: 'hidden',
      position: 'relative',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        boxShadow: 'inset 0px -70px 30px -30px white',
        height: '100%',
        width: '100%',
        pointerEvents: 'none',
      },
    },
  });

// https://github.com/mdvanes/go-medium-api/blob/master/api/static/main.js
export const PublicationCard: FC<Props> = ({ t, classes, publication }) => {
  const {
    latestPublishedAt,
    author,
    title,
    paragraphs,
    uniqueSlug,
    previewImgId,
  } = publication;
  const locale = i18n.language === 'nl' ? 'nl-NL' : 'en-US';
  const formattedDate = new Date(latestPublishedAt).toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const link = uniqueSlug;
  const media = previewImgId && (
    <CardMedia
      className={classes.media}
      image={`https://cdn-images-1.medium.com/fit/t/800/240/${previewImgId}`}
      title={title}
    />
  );
  return (
    <StyledCard>
      <CardHeader title={author} subheader={formattedDate} />
      {media}
      <CardContent>
        {!paragraphs && (
          <Typography variant="h3" className={classes.title}>
            {title}
          </Typography>
        )}
        <div className={classes.contentWrapper}>
          <SanitizedHTML
            allowedTags={['h3', 'em', 'p', 'a']}
            html={paragraphs}
          />
        </div>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" href={link}>
          {t('READ_MORE')}
        </Button>
        <ShareButtons
          twitter
          linkedin
          facebook
          size="small"
          color="primary"
          title={title}
          text={`Codestar article "${title}" by ${author}`}
          link={link}
        />
      </CardActions>
    </StyledCard>
  );
};

export default compose<Props, PropsOuter>(
  withStyles(styles),
  translate(['publications'], { wait: true })
)(PublicationCard);
