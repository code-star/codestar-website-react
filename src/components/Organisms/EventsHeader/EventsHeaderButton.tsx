import React, { FC } from 'react';
import { Button, withStyles, createStyles, Theme } from '@material-ui/core';
import { Link } from 'react-scroll';
import { purple } from '@material-ui/core/colors';
import compose from 'recompose/compose';
import { translate, TranslationFunction } from 'react-i18next';

const styles = (theme: Theme) =>
  createStyles({
    button: {
      display: 'inline-block',
      backgroundColor: 'white',
      padding: theme.spacing.unit,
      margin: theme.spacing.unit * 0.5,
      width: '110px',
      height: '110px',
      '&:hover': {
        color: 'white',
        backgroundColor: purple[700],
      },
    },
    box: {
      height: '100%',
      width: '100%',
    },
  });

type PropsInner = {
  t: TranslationFunction;
  classes: Record<string, string>;
};

type PropsOuter = {
  icon: any;
  label: string;
  to?: string;
  href?: string;
};

type Props = PropsInner & PropsOuter;

const EventsHeaderButton: FC<Props> = ({
  t,
  icon,
  label,
  to,
  href,
  classes,
}) => {
  const LocalButton = (
    <Button className={classes.button}>
      <div className={`row align-items-center mx-0 ${classes.box}`}>
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

export default compose<Props, PropsOuter>(
  translate(['events'], { wait: true }),
  withStyles(styles)
)(EventsHeaderButton);
