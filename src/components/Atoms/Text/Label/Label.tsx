import React from 'react';
import classNames from 'classnames/bind';
import style from './Label.module.css';

const cx = classNames.bind(style);

enum EColor {
	grey = 'grey',
	black = 'black',
	blue = 'blue',
}

enum ESize {
	tiny = 'tiny',
	small = 'small',
	medium = 'medium',
	large = 'large',
}

interface ILabelProps {
	color: EColor;
	size: ESize;
	text: string;
}

const Label = ({ color, size, text }: ILabelProps) => (
	<span
		className={cx(
			'label',
			{
				labelGrey: color === 'grey',
				labelBlack: color === 'black',
				labelBlue: color === 'blue',
			},
			{
				labelTiny: size === 'tiny',
				labelSmall: size === 'small',
				labelMedium: size === 'medium',
				labelLarge: size === 'large',
			}
		)}
	>
		{text}
	</span>
);

export default Label;
