import React, { FC } from 'react';
import { IconButton, Snackbar, SnackbarContent } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

type Props = {
  showMessage: boolean;
  message: string | null;
  handleCloseSnackbar: () => void;
  handleExitedSnackbar: () => void;
};

const AppMessageSnackbar: FC<Props> = ({ showMessage, message, handleCloseSnackbar, handleExitedSnackbar }) => (
  <Snackbar open={showMessage} autoHideDuration={6000} onClose={handleCloseSnackbar} onExited={handleExitedSnackbar}>
    <SnackbarContent
      message={<span>{message}</span>}
      action={[
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          onClick={handleCloseSnackbar}
        >
          <CloseIcon />
        </IconButton>,
      ]}
    />
  </Snackbar>
);

export default AppMessageSnackbar;
