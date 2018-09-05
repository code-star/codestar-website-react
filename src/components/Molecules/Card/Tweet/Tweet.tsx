import React from 'react';
import classNames from 'classnames/bind';
import style from './Tweet.module.css';
import Label from '../../../Atoms/Text/Label';
import Icon from '../../../Atoms/Image/Icon';
import { EColor, ESize, EIcon } from '../../../../utility/enumeration';

const cx = classNames.bind(style);

interface ITweetProps {
	name: string;
	screenName: string;
	createdAt: number;
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
			<Label color={EColor.grey} size={ESize.medium} text={`@${screenName}`} />
			<Label
				color={EColor.grey}
				size={ESize.medium}
				text={new Date(createdAt).toDateString()}
			/>
			<Icon name={EIcon.cheveronDown} width={20} height={20} />
		</div>
		<div className={cx('tweetBody')}>
			<Label color={EColor.grey} size={ESize.small} text={text} />
		</div>
		<div className={cx('tweetFooter')}>
			<Icon name={EIcon.bubble} width={18} height={18} fill="#ababab" />
			<Icon
				name={EIcon.swap}
				width={18}
				height={18}
				fill="#ababab"
				text={String(retweetCount)}
			/>
			<Icon
				name={EIcon.heart}
				width={18}
				height={18}
				fill="#ababab"
				text={String(favoriteCount)}
			/>
			<Icon name={EIcon.mail} width={18} height={18} fill="#ababab" />
		</div>
	</div>
);

export default Tweet;
