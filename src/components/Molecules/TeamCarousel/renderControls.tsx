import React from 'react';
import { Button } from '@material-ui/core';

import {
  NavigateBefore as NavigateBeforeIcon,
  NavigateNext as NavigateNextIcon,
} from '@material-ui/icons';

export const leftControls: any = ({ previousSlide }: any) => {
  return (
    <Button mini variant="fab" onClick={previousSlide}>
      <NavigateBeforeIcon />
    </Button>
  );
};

export const rightControls: any = ({ nextSlide }: any) => {
  return (
    <Button mini variant="fab" onClick={nextSlide}>
      <NavigateNextIcon />
    </Button>
  );
};
