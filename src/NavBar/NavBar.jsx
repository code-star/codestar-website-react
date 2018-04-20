import React from 'react';
import { Link } from 'react-router-dom';

// Material UI
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Hidden from 'material-ui/Hidden';

// Material UI Icons
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

import { withStyles } from 'material-ui/styles';

const styles = {
	flex: {
		flex: 1,
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20,
	},
};

const NavBar = props => (
	<AppBar position="sticky">
		<Toolbar>
			<IconButton
				onClick={props.toggle}
				className={props.classes.menuButton}
				color="inherit"
				aria-label="Menu"
			>
				<MenuIcon />
			</IconButton>
			<Typography
				className={props.classes.flex}
				variant="title"
				color="inherit"
			>
				<Link to="/">Codestar</Link>
			</Typography>
			<Hidden only="xs">
				<Button color="inherit">
					<Link to="/cases">Cases</Link>
				</Button>
				<Button color="inherit">
					<Link to="/about">About</Link>
				</Button>
				<Button color="inherit">
					<Link to="/jobs">Jobs</Link>
				</Button>
				<Button color="inherit">
					<Link to="/contact">Contact</Link>
				</Button>
			</Hidden>
		</Toolbar>
	</AppBar>
);
export default withStyles(styles)(NavBar);
