import React, { Component } from 'react';
import { Button, withStyles } from '@material-ui/core';
import css from './EventsHeaderButton.module.css';
import { Link } from 'react-scroll';
import { purple } from '@material-ui/core/colors';

const styles = {
  button: {
    '&:hover': {
      color: 'white',
      backgroundColor: purple[700],
    },
  },
};

class EventsHeaderButton extends Component {
  render() {
    const { icon, label, to, href, classes } = this.props;

    const LocalButton = (
      <Button className={`${css.button} ${classes.button}`}>
        <div className={`row align-items-center mx-0 ${css.box}`}>
          <div className="col-12 p-0">
            {icon}
            <br />
            {label}
          </div>
        </div>
      </Button>
    );
    if (to) {
      return (
        <Link to={to} hashSpy smooth>
          {LocalButton}
        </Link>
      );
    }
    if (href) {
      return <a href={href}>{LocalButton}</a>;
    }
    return LocalButton;
  }
}

export default withStyles(styles)(EventsHeaderButton);
