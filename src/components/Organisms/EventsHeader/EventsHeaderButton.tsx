import React, { SFC } from 'react';
import { Button, withStyles } from '@material-ui/core';
import css from './EventsHeaderButton.module.scss';
import { Link } from 'react-scroll';
import { purple } from '@material-ui/core/colors';
import compose from 'recompose/compose';
import { translate, TranslationFunction } from 'react-i18next';

const styles = {
  button: {
    '&:hover': {
      color: 'white',
      backgroundColor: purple[700],
    },
  },
};

interface IPropsInner {
  t: TranslationFunction;
  classes: any;
}

interface IPropsOuter {
  icon: any;
  label: string;
  to?: string;
  href?: string;
}

const EventsHeaderButton: SFC<IPropsInner & IPropsOuter> = ({
  t,
  icon,
  label,
  to,
  href,
  classes,
}) => {
  const LocalButton = (
    <Button className={`${css.button} ${classes.button}`}>
      <div className={`row align-items-center mx-0 ${css.box}`}>
        <div className="col-12 p-0">
          {icon}
          <br />
          {t(label)}
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
};

export default compose<IPropsInner, IPropsOuter>(
  translate(['events'], { wait: true }),
  withStyles(styles)
)(EventsHeaderButton);
