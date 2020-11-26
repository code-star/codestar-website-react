import React from 'react'
import {
  AppBar, Hidden, IconButton, Toolbar, Typography
} from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import ResponsiveImage from '../../../ResponsiveImage/ResponsiveImage';
import { Link } from 'react-router-dom';
import { createUseStyles } from "react-jss";
import theme from '../../../codestarMuiTheme';


// I am getting a different error as before and I didn'
// t phantom that I can simply push to the branch. 
// What I am trying to do is work with the same override object below here
// that you used for overriding Material UI
// So the documentation of JSS says that I need to use createUseStyles
// However I keep getting errors of some nature (of which the current)


const styles = {
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  logo: {
    marginRight: '1em',
    width: '100px',
    [theme.breakpoints.up('md')]: {
      width: '140px',
    },
  },
  appBar: {
    backgroundColor: 'rgba(0,0,0,0.75)',
  },
  langButton: {
    margin: 0,
    padding: 0,
    minWidth: '70px',
    '&:focus': {
      outline: 0,
    },
  },
  button: {
    '&:hover': {
      color: 'white',
      background: 'rgba(200, 200, 255, 0.2)',
    },
  },
  envTag: {
    display: 'inline-block',
    fontFamily: 'monospace',
    marginLeft: '1em',
  },
};


export default function NavBarFunctional(props: any) {




  const classes = createUseStyles({ styles });

  console.log("these are the props", props)


  const notificationIcon = props.nextEvent ? (
    <span style={{ color: 'red' }}> ●</span>
  ) : null;

  return (
    <AppBar position="fixed" className={classes.appBar} >
      <Toolbar>
        <Hidden mdUp>
          <IconButton
            onClick={props.toggle}
            className={`${classes.menuButton} ${classes.button}`}
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon />
            {notificationIcon}
          </IconButton>
        </Hidden>
        <Typography
          className={classes.flex}
          variant="h6"
          color="inherit"
        >

          <Link to="/">
            <ResponsiveImage
              path="/images/codestar_logo_dark.svg"
              alt="Codestar Logo"
              className={classes.logo}
            />

          </Link>
        </Typography>


      </Toolbar>
    </AppBar>
  )
}

