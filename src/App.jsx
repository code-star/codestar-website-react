import React, { Component } from 'react';
import Intro from './Intro/Intro';
import Cases from './Cases/Cases';
import Contact from './Contact/Contact';
// import Features from './Features/Features';
import Reboot from 'material-ui/Reboot';

import { BrowserRouter as Router, Route } from 'react-router-dom';

const Index = () => (
	<div>
		<Intro />
		{/* <Features /> */}
		<Contact />
	</div>
);

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Reboot />

					<Route exact path="/" component={Index} />
					<Route path="/cases" component={Cases} />
				</div>
			</Router>
		);
	}
}

export default App;
