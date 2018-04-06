import React, { Component } from 'react';

import Intro from './Intro/Intro';
import Cases from './Cases/Cases';
import Contact from './Contact/Contact';
import SideMenu from './SideMenu/SideMenu';
import NavBar from './NavBar/NavBar';
import Footer from './Footer/Footer';

import CssBaseline from 'material-ui/CssBaseline';

import { BrowserRouter as Router, Route } from 'react-router-dom';

const Index = () => (
	<div>
		<Intro />
		<Contact />
	</div>
);

class App extends Component {
	state = {
		drawerMenu: false,
	};

	constructor(props) {
		super();
		this.classes = props.classes;
	}

	toggleDrawer = () => {
		this.setState(prevState => {
			return {
				drawerMenu: !prevState.drawerMenu,
			};
		});
	};

	render() {
		return (
			<div>
				<NavBar toggle={this.toggleDrawer} />
				<SideMenu open={this.state.drawerMenu} toggle={this.toggleDrawer} />
				<Router>
					<div>
						<CssBaseline />

						<Route exact path="/" component={Index} />
						<Route path="/cases" component={Cases} />
					</div>
				</Router>
				<Footer />
			</div>
		);
	}
}

export default App;
