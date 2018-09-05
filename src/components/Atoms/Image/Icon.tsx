import React from 'react';
import { getPath } from '../../../utility/font';

interface IIconProps {
	name: string;
	width: number;
	height: number;
	fill?: string;
	className?: string;
}

const Icon = ({
	name,
	width,
	height,
	fill = '',
	className = '',
}: IIconProps) => (
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
);

export default Icon;
