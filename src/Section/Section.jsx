import React from 'react';
import styles from './Section.module.css';

const Section = props => (
	<section className={props.className} id={props.id}>
		<div className={`container ${styles.container}`}>{props.children}</div>
	</section>
);

export default Section;
