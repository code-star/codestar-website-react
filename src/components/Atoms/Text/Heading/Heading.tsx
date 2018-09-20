import React from 'react';
import classNames from 'classnames/bind';
import style from './Heading.module.css';

const cx = classNames.bind(style);

interface IHeadingProps {
  type: string;
  color: string;
  text: string;
  className?: string;
}

const Heading = ({
  type,
  color = 'black',
  text,
  className = '',
}: IHeadingProps) => {
  if (type === 'h1') {
    return (
      <h1
        className={cx(className, {
          headingWhite: color === 'white',
          headingBlack: color === 'black',
        })}
      >
        {text}
      </h1>
    );
  } else if (type === 'h2') {
    return (
      <h2
        className={cx(className, {
          headingWhite: color === 'white',
          headingBlack: color === 'black',
        })}
      >
        {text}
      </h2>
    );
  } else if (type === 'h3') {
    return (
      <h3
        className={cx(className, {
          headingWhite: color === 'white',
          headingBlack: color === 'black',
        })}
      >
        {text}
      </h3>
    );
  } else if (type === 'h4') {
    return (
      <h4
        className={cx(className, {
          headingWhite: color === 'white',
          headingBlack: color === 'black',
        })}
      >
        {text}
      </h4>
    );
  }
  return null;
};

export default Heading;
