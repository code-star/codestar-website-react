
import { AppBar, Button, Hidden, IconButton, Theme, Toolbar, Typography, withStyles } from '@material-ui/core'
import { createStyles, StyleRules, WithStyles } from '@material-ui/core/styles';
import React, { FC } from 'react'
import { compose } from 'recompose';
import { Menu as MenuIcon, Language as LanguageIcon } from '@material-ui/icons';
import { IMeetupEvent } from '../../../containers/EventsContainer/EventsContainer.interfaces';
import { Link } from 'react-router-dom';
import ResponsiveImage from '../../../ResponsiveImage/ResponsiveImage';
import i18n from '../../../i18n';
import { t } from 'i18next';
import { CustomButton } from '../../Atoms/CustomButton/CustomButton';
import EventsButton from '../EventsButton/EventsButton';

// const useStyles = makeStyles(
//   ({​​​​​ typography }​​​​​: Theme): StyleRules =>
//   createStyles({​​​​​
//   root: {​​​​​
//   height: "100vh",
//   maxHeight: "335px",
//   display: "flex",
//   flexDirection: "column",
//   }​​​​​,

const styles = (theme: Theme): StyleRules =>
  createStyles({
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
  });


interface Props {
  classes: WithStyles['classes']
  toggle: () => void
  nextEvent: IMeetupEvent | null
}

// Pick is a way to { toggle: () => void }
type OuterProps = Pick<Props, "toggle" | "nextEvent">

const NavBarFunc: FC<Props> = ({ classes, toggle, nextEvent }) => {


  const toggleLanguage = () =>
    i18n.language === 'nl'
      ? i18n.changeLanguage('en')
      : i18n.changeLanguage('nl');

  const languageButton = (
    <Button
      onClick={toggleLanguage}
      color="inherit"
      className={`${classes.langButton} ${classes.button}`}
    >
      <LanguageIcon className="mr-2" />
      {i18n.language}
    </Button>
  );


  return (
    <div>
      <AppBar position="fixed" className={classes.appBar} >
        <Toolbar>
          <Hidden mdUp>
            <IconButton
              onClick={toggle}
              className={`${classes.menuButton} ${classes.button}`}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
              {nextEvent && <span style={{ color: 'red' }}> ●</span>}
            </IconButton>
          </Hidden>
          <span style={{ backgroundColor: "purple" }}>RFC temp -</span>
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
            <Hidden smDown>{languageButton}</Hidden>
            {process.env.REACT_APP_STAGE === 'dev' ? (
              <div className={classes.envTag}>[DEV]</div>
            ) : null}
            {process.env.REACT_APP_STAGE === 'test' ? (
              <div className={classes.envTag}>[TEST]</div>
            ) : null}
          </Typography>
          <Hidden mdUp>{languageButton}</Hidden>
          <Hidden smDown>
            <CustomButton
              component={Link}
              to="/"
              color="inherit"
              className={classes.button}
            >
              Home
            </CustomButton>
            <EventsButton label="Events" nextEvent={nextEvent} />
            {/* <CustomButton
              component={Link}
              to="/publications"
              color="inherit"
              className={props.classes.button}
            >
              {t('PUBLICATIONS')}
            </CustomButton>
            <CustomButton
              component={Link}
              to="/cases"
              color="inherit"
              className={props.classes.button}
            >
              Cases
            </CustomButton> */}
            <CustomButton
              component={Link}
              to="/about"
              color="inherit"
              className={classes.button}
            >
              {t('ABOUT')}
            </CustomButton>
            <CustomButton
              component={Link}
              to="/jobs"
              color="inherit"
              className={classes.button}
            >
              Jobs
            </CustomButton>
            <CustomButton
              component={Link}
              to="/contact"
              color="inherit"
              className={classes.button}
            >
              Contact
            </CustomButton>
          </Hidden>
        </Toolbar>
      </AppBar>
    </div>
  )
}


export default compose<Props, OuterProps>(
  withStyles(styles)
)(NavBarFunc);