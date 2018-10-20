import React, { SFC } from 'react';
import { Button } from '@material-ui/core';

import { NavigateNext as NavigateNextIcon } from '@material-ui/icons';

const RightControls: SFC = ({ nextSlide }: any) => {
  return (
    <Button mini variant="fab" onClick={nextSlide}>
      <NavigateNextIcon />
    </Button>
  );
};

export default RightControls;
