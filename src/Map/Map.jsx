import React from 'react';
import compose from 'recompose/compose';

import { withWidth } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  halfHeightMinusHalfNavBar: {
    minHeight: 'calc(50vh - 28px)',
    [theme.breakpoints.up('sm')]: {
      minHeight: 'calc(50vh - 32px)',
    },
  },
})

const MapUrl =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2453.212619226339!2d5.109273615790301!3d52.057652079729266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c665c3d22bd00b%3A0xdcea00cdfeb9dd58!2sCodestar!5e0!3m2!1sen!2snl!4v1519930704938'

const Map = props => (
  <iframe
    className={props.halfHeightMinusHalfNavBar ? props.classes.halfHeightMinusHalfNavBar : ''}
    src={MapUrl}
    width="100%"
    frameBorder="0"
    style={{
      border: 0,
      display: 'block',
    }}
    allowFullScreen
    title="Map"
  />
)

export default compose(
  withStyles(styles),
  withWidth()
)(Map)
