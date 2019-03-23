import React, { FC } from 'react';
import { translate, TranslationFunction } from 'react-i18next';
import {
  Theme,
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

const styles = (theme: Theme) =>
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

// TODO translations
// TODO avatar image
// TODO splash image, if available

// https://github.com/mdvanes/go-medium-api/blob/master/api/static/main.js
export const PublicationCard: FC<Props> = ({ t, classes, publication }) => {
  const {
    latestPublishedAt,
    author,
    authorImg,
    title,
    paragraphs,
    uniqueSlug,
  } = publication;
  const locale = i18n.language === 'nl' ? 'nl-NL' : 'en-US';
  const formattedDate = new Date(latestPublishedAt).toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const link = `https://medium.com/codestar-blog/${uniqueSlug}`;
  return (
    <StyledCard>
      <CardHeader
        avatar={
          <Avatar
            aria-label="Author"
            src={authorImg}
            className={classes.avatar}
          >
            A
          </Avatar>
        }
        title={author}
        subheader={formattedDate}
      />
      <CardMedia
        className={classes.media}
        image={
          'https://cdn-images-1.medium.com/fit/t/800/240/1*LPCG2xlLiUdqcYJulzxvmw.png'
        }
        title={title}
      />
      <CardContent>
        <Typography variant="h3" className={classes.title}>
          {title}
        </Typography>
        <Typography>[paragraphs] {paragraphs}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          [Share]
        </Button>
        <Button size="small" color="primary" href={link}>
          [READ more]
        </Button>
      </CardActions>
    </StyledCard>
  );
};

export default compose<Props, PropsOuter>(
  withStyles(styles),
  translate(['about'], { wait: true })
)(PublicationCard);
