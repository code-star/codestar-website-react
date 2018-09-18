import React from 'react';
import classNames from 'classnames/bind';
import style from './Tweet.module.css';
import Label from '../../../Atoms/Text/Label';
import { EColor, ESize } from '../../../../utility/enumeration';

const cx = classNames.bind(style);

interface ITweetProps {
  name: string;
  screenName: string;
  createdAt: string;
  text: string;
  favoriteCount: number;
  retweetCount: number;
}

const Tweet = ({
  name,
  screenName,
  createdAt,
  text,
  favoriteCount,
  retweetCount,
}: ITweetProps) => (
  <div className={cx('tweet')}>
    <div className={cx('tweetHeader')}>
      <Label color={EColor.black} size={ESize.medium} text={name} />
      <Label color={EColor.black} size={ESize.medium} text={`@${screenName}`} />
      <Label
        color={EColor.black}
        size={ESize.medium}
        text={new Date(createdAt).toDateString()}
      />
    </div>
    <div className={cx('tweetBody')}>
      <Label color={EColor.black} size={ESize.small} text={text} />
    </div>
  </div>
);

export default Tweet;
