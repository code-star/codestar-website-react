import React from 'react';
import styles from './Section.module.css';

const Section = props => (
	<section className={props.className} id={props.id}>
		<div className={props.container ? `container ${styles.container}` : null}>
			{props.children}
		</div>
	</section>
);

export default Section;
