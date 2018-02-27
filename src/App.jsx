import React, { Component } from 'react';
import './App.css';

import Intro from './Intro/Intro';
import Cases from './Cases/Cases';
import Contact from './Contact/Contact';

class App extends Component {
	render() {
		return (
			<div>
				<Intro />
				<Cases />
				<Contact />
			</div>
		);
	}
}

export default App;
