import React, { SFC } from 'react';
import cx from 'classnames';
import './Heading.css';

interface IHeadingProps {
	type: string;
	text: string;
}

const Heading: SFC<IHeadingProps> = ({ type, text }) => {
	return (
		<>
			<h1
				className={cx('heading', {
					'heading--visible': type === 'h1',
					'heading--hidden': type !== 'h1',
				})}
			>
				{text}
			</h1>
			<h2
				className={cx('heading', {
					'heading--visible': type === 'h2',
					'heading--hidden': type !== 'h2',
				})}
			>
				{text}
			</h2>
			<h3
				className={cx('heading', {
					'heading--visible': type === 'h3',
					'heading--hidden': type !== 'h3',
				})}
			>
				{text}
			</h3>
			<h4
				className={cx('heading', {
					'heading--visible': type === 'h4',
					'heading--hidden': type !== 'h4',
				})}
			>
				{text}
			</h4>
		</>
	);
};

export default Heading;
