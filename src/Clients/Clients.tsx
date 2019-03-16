import React from 'react';
import compose from 'recompose/compose';
import { GridList, GridListTile } from '@material-ui/core';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import ResponsiveImage from '../ResponsiveImage/ResponsiveImage';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { clientsListSmallOrder, clientsList } from './clientsList';

const styles: Record<string, CSSProperties> = {
  gridList: {
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
  },
  faded: {
    background:
      'linear-gradient( rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6))',
  },
};

type ClientsProps = Readonly<{
  width: Breakpoint;
  classes: WithStyles['classes'];
}>;

const Clients = (props: ClientsProps) => {
  const isSmall = !isWidthUp('md', props.width);
  return (
    <div className="mt-3">
      <GridList
        cellHeight={200}
        cols={isSmall ? 2 : 4}
        className={props.classes.gridList}
      >
        {(isSmall ? clientsListSmallOrder : clientsList).map(client => {
          return (
            <GridListTile key={client.name} cols={client.featured ? 2 : 1}>
              {client.featured ? (
                <div
                  className="row justify-content-center align-items-center mx-0"
                  style={{ width: '100%', height: '100%' }}
                >
                  <div className={props.classes.background}>
                    <ResponsiveImage
                      path={client.background}
                      alt={client.name}
                      width="100%"
                      height="100%"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div
                    className={`${props.classes.faded} ${
                      props.classes.background
                    }`}
                  />
                  <div className="col-8 col-md-6">
                    <ResponsiveImage
                      path={client.logo}
                      alt={client.name}
                      width="100%"
                    />
                  </div>
                </div>
              ) : (
                <div
                  className="row justify-content-center align-items-center ml-0 mr-0"
                  style={{
                    backgroundColor: client.color
                      ? client.color
                      : 'transparent',
                    width: '100%',
                    height: '100%',
                  }}
                >
                  <div className="col-10">
                    <ResponsiveImage
                      path={client.logo}
                      alt={client.name}
                      width="100%"
                    />
                  </div>
                </div>
              )}
            </GridListTile>
          );
        })}
      </GridList>
    </div>
  );
};

export default compose<ClientsProps, {}>(
  withStyles(styles),
  withWidth()
)(Clients);
