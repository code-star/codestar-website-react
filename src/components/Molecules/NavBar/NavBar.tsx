import * as React from 'react'
import { Link } from 'react-router-dom'
import compose from 'recompose/compose'
import { translate } from 'react-i18next'

import { AppBar, Toolbar, Typography, Button, Hidden, IconButton, withWidth } from '@material-ui/core'
import { CustomButton } from '../../Atoms/CustomButton/CustomButton'

import { Menu as MenuIcon, Language as LanguageIcon } from '@material-ui/icons'
import { withStyles } from '@material-ui/core/styles'
import EventsButton from '../EventsButton/EventsButton'

import i18n from '../../../i18n'
import ResponsiveImage from '../../../ResponsiveImage/ResponsiveImage'

type NavBarProps = any

const styles: any = (theme: any) => ({
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
})

class NavBar extends React.Component<NavBarProps> {
  public render() {
    const { t, ...props } = this.props

    const toggleLanguage = () => (i18n.language === 'nl' ? i18n.changeLanguage('en') : i18n.changeLanguage('nl'))
    const languageButton = (
      <Button onClick={toggleLanguage} color="inherit" className={`${props.classes.langButton} ${props.classes.button}`}>
        <LanguageIcon className="mr-2" />
        {i18n.language}
      </Button>
    )

    const notificationIcon = this.props.nextEvent ? <span style={{ color: 'red' }}> ●</span> : null

    return (
      <AppBar position="fixed" className={props.classes.appBar}>
        <Toolbar>
          <Hidden mdUp>
            <IconButton
              onClick={props.toggle}
              className={`${props.classes.menuButton} ${props.classes.button}`}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
              {notificationIcon}
            </IconButton>
          </Hidden>
          <Typography className={props.classes.flex} variant="title" color="inherit">
            <Link to="/">
              <ResponsiveImage path="/images/codestar_logo_dark.svg" alt="Codestar Logo" className={props.classes.logo} />
            </Link>
            <Hidden smDown>{languageButton}</Hidden>
            {process.env.REACT_APP_STAGE === 'dev' ? <div className={props.classes.envTag}>[DEV]</div> : null}
            {process.env.REACT_APP_STAGE === 'test' ? <div className={props.classes.envTag}>[TEST]</div> : null}
          </Typography>
          <Hidden mdUp>{languageButton}</Hidden>
          <Hidden smDown>
            <CustomButton component={Link} to="/" color="inherit" className={props.classes.button}>
              Home
            </CustomButton>
            <EventsButton label="Events" nextEvent={this.props.nextEvent} />
            <CustomButton component={Link} to="/cases" color="inherit" className={props.classes.button}>
              Cases
            </CustomButton>
            <CustomButton component={Link} to="/about" color="inherit" className={props.classes.button}>
              {t('ABOUT')}
            </CustomButton>
            <CustomButton component={Link} to="/jobs" color="inherit" className={props.classes.button}>
              Jobs
            </CustomButton>
            <CustomButton component={Link} to="/contact" color="inherit" className={props.classes.button}>
              Contact
            </CustomButton>
          </Hidden>
        </Toolbar>
      </AppBar>
    )
  }
}

export default compose(
  withStyles(styles),
  withWidth(),
  translate(['nav'], { wait: true })
)(NavBar)
