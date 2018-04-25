import React, { Component } from 'react';

import Intro from './Intro/Intro';
import Contact from './Contact/Contact';
import SideMenu from './SideMenu/SideMenu';
import NavBar from './NavBar/NavBar';
import Footer from './Footer/Footer';

import Cases from './Cases/Cases';
import casesList from './Cases/CasesList';
import ClientCase from './ClientCase/ClientCase';

import CssBaseline from 'material-ui/CssBaseline';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './About/About';
import Jobs from './Jobs/Jobs';

const Index = () => (
	<div>
		<Intro />
		{/* <Contact /> */}
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
				<Router>
					<div>
						<CssBaseline />
						<NavBar toggle={this.toggleDrawer} />
						<SideMenu open={this.state.drawerMenu} toggle={this.toggleDrawer} />

						<Route exact path="/" component={Index} />
						<Route exact path="/cases" component={Cases} />

						{casesList.map(projectCase => (
							<Route
								exact
								path={`/cases/${projectCase.client}`}
								key={projectCase.client}
								render={() => <ClientCase {...projectCase} />}
							/>
						))}

						<Route path="/about" component={About} />
						<Route path="/jobs" component={Jobs} />

						<Footer />
					</div>
				</Router>
			</div>
		);
	}
}

export default App;
