import React, { Component } from 'react';
import Intro from './Intro/Intro';
import Cases from './Cases/Cases';
import Contact from './Contact/Contact';
import Features from './Features/Features';

class App extends Component {
	render() {
		return (
			<div>
				<Intro />
				<Features />
				<Cases />
				<Contact />
			</div>
		);
	}
}

export default App;
