import React from 'react';
import { Fab } from '@material-ui/core';
import {
  NavigateBefore as NavigateBeforeIcon,
  NavigateNext as NavigateNextIcon,
} from '@material-ui/icons';
import {
  CarouselRenderControl,
  CarouselSlideRenderControlProps,
} from 'nuka-carousel';

export const leftControls: CarouselRenderControl = ({
  previousSlide,
}: CarouselSlideRenderControlProps) => {
  return (
    <Fab size="small" onClick={previousSlide}>
      <NavigateBeforeIcon />
    </Fab>
  );
};

export const rightControls: CarouselRenderControl = ({
  nextSlide,
}: CarouselSlideRenderControlProps) => {
  return (
    <Fab size="small" onClick={nextSlide}>
      <NavigateNextIcon />
    </Fab>
  );
};

export const bottomControls = () => {
  return <div />;
};
