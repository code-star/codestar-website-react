import * as React from 'react';
import { Link } from 'react-router-dom';
import { translate } from 'react-i18next';

import { withStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import { CustomButton } from '../components/Atoms/CustomButton/CustomButton';

import { getResponsiveImageUrl } from '../ResponsiveImage/ResponsiveImage';
import { ShareButtons } from '../ShareButtons/ShareButtons';

type JobCardProps = any;

const cardWidth = 250;

const styles: any = {
  card: {
    width: cardWidth,
    margin: 10,
    display: 'flex',
    flexDirection: 'column',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  content: {
    flex: '1 0 auto',
    textDecoration: 'none !important',
  },
};

class JobCard extends React.Component<JobCardProps> {
  public render() {
    const props = this.props;
    const { t, path } = props;
    const { title, short_description } = t('JOBS', { returnObjects: true })[
      path
    ];

    return (
      <Card className={props.classes.card}>
        <Link to={`/jobs/${props.path}`} className={props.classes.content}>
          <CardMedia
            className={props.classes.media}
            image={getResponsiveImageUrl(props.image, cardWidth * 2)}
            title={title}
          />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              {title}
            </Typography>
            <Typography component="p">{short_description}</Typography>
          </CardContent>
        </Link>
        <CardActions>
          <div style={{ flex: 1 }}>
            <CustomButton
              component={Link}
              to={`/jobs/${props.path}`}
              size="small"
              color="primary"
            >
              {t('JOBS_LEARN_MORE_BUTTON')}
            </CustomButton>
          </div>
          <ShareButtons
            twitter
            linkedin
            facebook
            size="small"
            color="primary"
            title={title}
            text={`${t('JOBS_LOOKING_FOR')} ${title} – ${short_description}`}
            link={`${window.location.href}/jobs/${props.path}`}
          />
        </CardActions>
      </Card>
    );
  }
}

export default translate(['jobs'], { wait: true })(withStyles(styles)(JobCard));
