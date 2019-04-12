import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import Carousel from 'nuka-carousel';
import React, { FC } from 'react';
import { getResponsiveImageUrl } from '../../../ResponsiveImage/ResponsiveImage';
import { leftControls, rightControls } from './renderControls';
import Team from './Team.json';
import styles from './TeamCarousel.module.scss';

function shuffleArray(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const cardWidth = 300;

const TeamCarousel: FC = () => {
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
      {shuffleArray(Team)
        .filter(
          (person: any) => person && !person.gone && person.name && person.image
        )
        .map((person: any) => (
          <Card key={person.image} className={`${styles.card} my-3`}>
            <CardMedia
              className={styles.cardMedia}
              image={getResponsiveImageUrl(
                `/images/team/${person.image}`,
                cardWidth * 2,
                'e_grayscale/co_rgb:0057ae,e_colorize:40'
              )}
              title={person.name}
            />
            <CardContent>
              <Typography variant="h5" component="h3">
                {person.name}
              </Typography>
              <Typography
                style={{ marginBottom: 16, fontSize: 14 }}
                color="textSecondary"
              >
                {person.job}
              </Typography>
              <Typography component="i">{person.tagline}</Typography>
            </CardContent>
          </Card>
        ))}
    </Carousel>
  );
};

export default TeamCarousel;
