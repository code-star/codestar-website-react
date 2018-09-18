import React, { Component } from 'react';
import compose from 'recompose/compose';

import { withStyles } from '@material-ui/core/styles';
import { withWidth } from '@material-ui/core';

import Container from '../Container/Container';

const data = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maximus mi id orci luctus, scelerisque ornare velit condimentum. Integer fermentum nisi in erat consequat pulvinar. Suspendisse dignissim, dolor nec laoreet porttitor, est ligula scelerisque massa, a eleifend justo turpis ac est. Aenean varius ipsum vitae leo vestibulum, sed fringilla nisi feugiat. Cras imperdiet finibus justo, ac consectetur eros. Pellentesque sapien augue, tincidunt at odio nec, tincidunt blandit erat. Donec at ligula vitae nisi sodales ornare. Donec vel eros vitae elit condimentum lobortis et pretium ante. Nullam tincidunt elementum mauris vitae lacinia. Curabitur bibendum turpis quis eros semper, vitae consectetur arcu commodo. Sed suscipit dui nulla, in porttitor tellus rutrum laoreet. Phasellus arcu tortor, laoreet eget orci eget, interdum varius dolor. Etiam viverra metus magna, quis dictum eros varius eu.
Integer lobortis est at dapibus luctus. Nullam laoreet arcu in volutpat feugiat. Pellentesque velit lacus, convallis ac dui non, rhoncus ultrices augue. Pellentesque ultrices sagittis felis luctus posuere. Nullam fringilla dolor et tellus tristique auctor. Mauris id leo non nulla vestibulum mollis euismod at erat. Proin congue fringilla nulla, at porta risus sollicitudin eget. Morbi lacinia fringilla libero, id vehicula libero porttitor quis. Quisque id venenatis magna. Praesent venenatis leo vel turpis tincidunt mollis. Ut ut lacus scelerisque, egestas massa id, feugiat ipsum. Fusce rhoncus vel nibh eu imperdiet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus ultrices, elit et viverra ullamcorper, lectus nibh laoreet sapien, quis porttitor quam diam eu arcu. Proin at viverra diam, at pulvinar leo.
Sed non justo ullamcorper nisi rutrum rhoncus quis et elit. Proin egestas mauris quis orci tincidunt, sit amet convallis sapien tristique. Fusce quis lacus id dui varius dignissim ac vel nunc. Mauris tincidunt mauris eu commodo aliquam. Proin placerat urna sit amet quam bibendum interdum. Donec condimentum dolor urna, et finibus turpis aliquam eu. Praesent bibendum mi at felis tempor elementum. Nullam a suscipit quam. Maecenas sodales, augue vel molestie ultricies, ante quam elementum quam, quis sodales ipsum nisl non velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Curabitur placerat gravida nibh, eget consectetur lacus rhoncus hendrerit. Phasellus posuere mi non est maximus ultrices. Sed auctor augue eu diam posuere, vitae pretium massa lobortis. Donec volutpat nibh vitae luctus faucibus. Maecenas ac ultricies nulla, eu tristique dui.
Fusce diam tellus, posuere a neque non, aliquet blandit dolor. Morbi viverra commodo velit non lobortis. Morbi tristique sem et accumsan auctor. Suspendisse gravida varius leo ac laoreet. Nunc et metus et nulla fringilla lacinia non in odio. Nulla convallis condimentum neque. Integer eget lectus elit. Phasellus in blandit mauris. Praesent et congue tellus. Vivamus luctus magna purus, et vehicula sem fringilla a.
Duis rhoncus ornare arcu, et feugiat nunc blandit in. Cras sit amet euismod elit. Quisque congue nisl id commodo consequat. Morbi nisi nibh, gravida quis mi nec, commodo euismod est. Maecenas sit amet mattis sapien. Integer risus urna, mollis non luctus id, imperdiet imperdiet sapien. Mauris eget lorem neque. Nunc nec est nulla. Donec ut elementum justo.
`.replace(/\n/g, '');

const notFoundTexts = 'Code 404\nPage not found'.split('\n');

const offset = 0x1337;
const lengths = {
  xs: 8,
  sm: 16,
  md: 24,
  lg: 32,
  xl: 40,
};

function toHex(n, padding) {
  const hex = n.toString(16);
  return '0'.repeat(padding - hex.length) + hex;
}

const styles = theme => ({
  mainLine: { color: 'white' },
  otherLines: { color: '#818d9c' },
  container: {
    display: 'flex',
    height: '100vh',
    textAlign: 'center',
    overflowY: 'hidden',
    alignItems: 'center',
    maskImage:
      'linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0.2) 100%)',
    paddingTop: '48px',
    [theme.breakpoints.up('md')]: {
      paddingTop: '64px',
    },
  },
  hexViewer: {
    flex: 1,
  },
  hexLine: {
    fontFamily:
      'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
    fontSize: '14px',
    lineHeight: '18px',
    overflow: 'visible',
  },
});

class NotFound extends Component {
  render() {
    const { classes, width } = this.props;

    const length = lengths[width];

    const textTop = data.substring(
      0,
      data.length / 2 + length - ((data.length / 2) % length)
    );
    const textBottom = data.substring(data.length / 2);

    const notFoundTextOffsets = notFoundTexts.map(
      text => text.length + (length - (text.length % length))
    );
    const notFoundTextOffset = notFoundTextOffsets.reduce((a, b) => a + b);

    function hexEditorify(text, initialIndex, styleClass) {
      return [...Array(Math.ceil(text.length / length)).keys()].map(i => {
        let content = text.slice(i * length, (i + 1) * length);
        if (content.length < length) {
          content += ' '.repeat(length - content.length);
        }
        const hex = content
          .split('')
          .map(c => toHex(c.charCodeAt(0), 2))
          .join(' ');

        const address = initialIndex + i * length;
        const hexAddress = toHex(address, 4);

        return (
          <pre
            style={{ margin: 0 }}
            key={initialIndex + i}
            className={`m-0 ${styleClass} ${classes.hexLine}`}
          >
            0x
            {hexAddress} │ {content.replace(/\s/g, '·')} │ {hex}
          </pre>
        );
      });
    }

    const hexEditorCodeTop = hexEditorify(
      textTop,
      offset - textTop.length,
      classes.otherLines
    );

    const hexEditorCodeMiddle = notFoundTexts.map((text, i) =>
      hexEditorify(
        text,
        i > 0 ? offset + notFoundTextOffsets[i - 1] : offset,
        classes.mainLine
      )
    );

    const hexEditorCodeBottom = hexEditorify(
      textBottom,
      offset + notFoundTextOffset,
      classes.otherLines
    );

    return (
      <Container fullHeight fluid noPadding className={classes.container}>
        <div className={classes.hexViewer}>
          {hexEditorCodeTop}
          <div style={{ margin: '.5rem 0' }}>{hexEditorCodeMiddle}</div>
          {hexEditorCodeBottom}
        </div>
      </Container>
    );
  }
}

export default compose(
  withStyles(styles),
  withWidth()
)(NotFound);
