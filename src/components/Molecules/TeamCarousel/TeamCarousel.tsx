import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import Carousel from 'nuka-carousel';
import React, { FC } from 'react';
import { getResponsiveImageUrl } from '../../../ResponsiveImage/ResponsiveImage';
import { leftControls, rightControls } from './renderControls';
import Team from './Team.json';
import styles from './TeamCarousel.module.scss';
import { shuffleArray } from '../../../utility/array';

type Colleague = {
  name: string;
  job: string;
  tagline: string;
  image: string;
  gone?: boolean;
};

const cardWidth = 300;

const TeamCarousel: FC = () => {
  const shuffledColleagues = shuffleArray<Colleague>(Team);
  const activeColleague = shuffledColleagues.filter(c => !c.gone);

  return (
    <Carousel
      slideWidth={`${cardWidth}px`}
      wrapAround
      autoplay
      autoplayInterval={7000}
      cellAlign="center"
      slidesToScroll="auto"
      renderCenterLeftControls={leftControls}
      renderCenterRightControls={rightControls}
    >
      {activeColleague.map((colleague: Colleague, index: number) => (
        <Card key={index} className={`${styles.card} my-3`}>
          <CardMedia
            className={styles.cardMedia}
            image={getResponsiveImageUrl(
              `/images/team/${colleague.image}`,
              cardWidth * 2,
              'e_grayscale/co_rgb:0057ae,e_colorize:40'
            )}
            title={colleague.name}
          />
          <CardContent>
            <Typography variant="h5" component="h3">
              {colleague.name}
            </Typography>
            <Typography
              style={{ marginBottom: 16, fontSize: 14 }}
              color="textSecondary"
            >
              {colleague.job}
            </Typography>
            <Typography component="i">{colleague.tagline}</Typography>
          </CardContent>
        </Card>
      ))}
    </Carousel>
  );
};

export default TeamCarousel;
