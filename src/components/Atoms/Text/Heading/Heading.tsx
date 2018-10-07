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
  const classNamesFromProps = {
    headingWhite: color === 'white',
    headingBlack: color === 'black',
  };

  if (type === 'h1') {
    return <h1 className={cx(className, classNamesFromProps)}>{text}</h1>;
  } else if (type === 'h2') {
    return <h2 className={cx(className, classNamesFromProps)}>{text}</h2>;
  } else if (type === 'h3') {
    return <h3 className={cx(className, classNamesFromProps)}>{text}</h3>;
  } else if (type === 'h4') {
    return <h4 className={cx(className, classNamesFromProps)}>{text}</h4>;
  }
  return null;
};

export default Heading;
