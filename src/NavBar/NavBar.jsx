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

import compose from 'recompose/compose';
import { withStyles } from 'material-ui/styles';
import withWidth from 'material-ui/utils/withWidth';

const styles = theme => ({
	flex: {
		flex: 1,
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20,
	},
	logo: {
		width: '100px',
		[theme.breakpoints.up('md')]: {
			width: '200px',
		},
	},
});

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
				<Link to="/">
					<img
						src={`${process.env.PUBLIC_URL}/images/logo-codestar-simple.svg`}
						alt="Codestar Logo"
						className={props.classes.logo}
					/>
				</Link>
			</Typography>
			<Hidden only="xs">
				<Button component={Link} to="/" color="inherit">
					Home
				</Button>
				<Button component={Link} to="/cases" color="inherit">
					Cases
				</Button>
				<Button component={Link} to="/about" color="inherit">
					About
				</Button>
				<Button component={Link} to="/jobs" color="inherit">
					Jobs
				</Button>
				<Button component={Link} to="/contact" color="inherit">
					Contact
				</Button>
			</Hidden>
		</Toolbar>
	</AppBar>
);

export default compose(withStyles(styles), withWidth())(NavBar);
