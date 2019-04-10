import React from 'react';
import { Fab } from '@material-ui/core';

import {
  NavigateBefore as NavigateBeforeIcon,
  NavigateNext as NavigateNextIcon,
} from '@material-ui/icons';

export const leftControls: any = ({ previousSlide }: any) => {
  return (
    <Fab size="small" onClick={previousSlide}>
      <NavigateBeforeIcon />
    </Fab>
  );
};

export const rightControls: any = ({ nextSlide }: any) => {
  return (
    <Fab size="small" onClick={nextSlide}>
      <NavigateNextIcon />
    </Fab>
  );
};

export const bottomControls = () => {
  return <div />;
};
