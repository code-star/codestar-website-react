import React from 'react';
import classNames from 'classnames/bind';
import style from './Icon.module.css';
import { getPath } from '../../../utility/font';

const cx = classNames.bind(style);

interface IIconProps {
	name: string;
	width: number;
	height: number;
	fill?: string;
	className?: string;
	text?: string;
}

const Icon = ({
	name,
	width,
	height,
	fill = '',
	className = '',
	text = '',
}: IIconProps) => (
	<div className={cx('icon')}>
		<svg
			fill={fill}
			fontSize="1px"
			width={width}
			height={height}
			viewBox="0 0 1024 1024"
			className={className}
		>
			<path d={getPath(name)} />
		</svg>
		<span>{text}</span>
	</div>
);

export default Icon;
