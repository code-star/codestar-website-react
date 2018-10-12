import React, { Component } from 'react';

class TextLogo extends Component {
  render() {
    const { dark, small } = this.props;
    return (
      <img
        src={`${process.env.PUBLIC_URL}/images/codestar_logo_${
          dark ? 'dark' : 'light'
        }.svg`}
        alt="Codestar"
        style={
          small
            ? { height: '0.8em', marginBottom: '0.2em' }
            : { height: '0.8em', marginBottom: '0.12em' }
        }
      />
    );
  }
}

class InlineLogo extends Component {
  replaceWithLogo(text) {
    return text
      .split('Codestar')
      .reduce(
        (accu, t, i) =>
          i === 0
            ? [t]
            : accu.concat(
                <TextLogo dark={this.props.dark} small={this.props.small} />,
                t
              ),
        []
      );
  }

  injectLogo(children) {
    return React.Children.map(children, (child, i) => {
      if (!child.props) {
        return this.replaceWithLogo(child);
      } else if (child.props.children) {
        return React.cloneElement(child, {
          children: this.injectLogo(child.props.children),
        });
      } else {
        return React.cloneElement(child);
      }
    });
  }

  render() {
    return this.injectLogo(this.props.children);
  }
}

export default InlineLogo;
export { TextLogo };
