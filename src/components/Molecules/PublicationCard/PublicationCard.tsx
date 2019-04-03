import React, { FC } from 'react';
import { translate, TranslationFunction } from 'react-i18next';
import {
  Typography,
  createStyles,
  CardContent,
  Card,
  CardHeader,
  CardMedia,
  CardActions,
  Button,
  Avatar,
} from '@material-ui/core';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import i18n from '../../../i18n';
import { IPublication } from '../../../publicationsService';
import {ShareButtons} from "../../../ShareButtons/ShareButtons";

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

const styles = () =>
  createStyles({
    media: {
      height: 0,
      paddingTop: '15%',
    },
    title: {
      fontSize: '2rem',
      fontWeight: 500,
    },
  });

// https://github.com/mdvanes/go-medium-api/blob/master/api/static/main.js
export const PublicationCard: FC<Props> = ({ t, classes, publication }) => {
  const {
    latestPublishedAt,
    author,
    authorImg,
    title,
    paragraphs,
    uniqueSlug,
    previewImgId
  } = publication;
  const locale = i18n.language === 'nl' ? 'nl-NL' : 'en-US';
  const formattedDate = new Date(latestPublishedAt).toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const link = `https://medium.com/codestar-blog/${uniqueSlug}`;
  const media = previewImgId && (<CardMedia
    className={classes.media}
    image={
      `https://cdn-images-1.medium.com/fit/t/800/240/${previewImgId}`
    }
    title={title}
  />);
  return (
    <StyledCard>
      <CardHeader
        avatar={
          <Avatar
            aria-label="Author"
            src={`https://cdn-images-1.medium.com/fit/c/50/50/${authorImg}`}
            className={classes.avatar}
          >
            A
          </Avatar>
        }
        title={author}
        subheader={formattedDate}
      />
      {media}
      <CardContent>
        <Typography variant="h3" className={classes.title}>
          {title}
        </Typography>
        <Typography>{paragraphs}</Typography>
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
