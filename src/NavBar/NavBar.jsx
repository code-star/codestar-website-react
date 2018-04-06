import React from 'react';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Hidden from 'material-ui/Hidden';

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
				Codestar
			</Typography>
			<Hidden only="xs">
				<Button color="inherit">Cases</Button>
				<Button color="inherit">About</Button>
				<Button color="inherit">Jobs</Button>
				<Button color="inherit">Contact</Button>
			</Hidden>
		</Toolbar>
	</AppBar>
);
export default withStyles(styles)(NavBar);
