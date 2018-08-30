import React, { SFC } from 'react';
import cx from 'classnames';
import './Heading.css';

interface IHeadingProps {
	type: string;
	color: string;
	text: string;
}

const Heading: SFC<IHeadingProps> = ({ type, color = 'black', text }) => {
	if (type === 'h1') {
		return (
			<h1
				className={cx('heading', {
					'heading--white': color === 'white',
					'heading--black': color === 'black',
				})}
			>
				{text}
			</h1>
		);
	} else if (type === 'h2') {
		return (
			<h2
				className={cx('heading', {
					'heading--white': color === 'white',
					'heading--black': color === 'black',
				})}
			>
				{text}
			</h2>
		);
	} else if (type === 'h3') {
		return (
			<h3
				className={cx('heading', {
					'heading--white': color === 'white',
					'heading--black': color === 'black',
				})}
			>
				{text}
			</h3>
		);
	} else if (type === 'h4') {
		return (
			<h4
				className={cx('heading', {
					'heading--white': color === 'white',
					'heading--black': color === 'black',
				})}
			>
				{text}
			</h4>
		);
	}
	return null;
};

export default Heading;
