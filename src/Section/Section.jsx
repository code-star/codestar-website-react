import React from 'react';
import styles from './Section.module.css';

const Section = props => (
	<section
		className={props.className}
		id={props.id}
		style={{
			backgroundImage: `url('${props.image}')`,
			backgroundSize: 'cover',
			backgroundPosition: 'center center',
			minHeight: props.full && !props.container ? '100vh' : 'auto',
		}}
	>
		{props.container && (
			<div className={`container ${styles.container}`}>{props.children}</div>
		)}
		{!props.container && props.children}
	</section>
);

export default Section;
