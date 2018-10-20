import React, { SFC } from 'react';
import { Button } from '@material-ui/core';

import { NavigateBefore as NavigateBeforeIcon } from '@material-ui/icons';

const LeftControls: SFC = ({ previousSlide }: any) => {
  return (
    <Button mini variant="fab" onClick={previousSlide}>
      <NavigateBeforeIcon />
    </Button>
  );
};

export default LeftControls;
