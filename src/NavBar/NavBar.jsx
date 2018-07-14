import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import compose from 'recompose/compose';
import { translate } from 'react-i18next';

import {
	AppBar,
	Toolbar,
	Typography,
	Button,
	Hidden,
	IconButton,
	withWidth,
} from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';

import i18n from '../i18n';

const styles = theme => ({
	flex: {
		flex: 1,
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20,
	},
	logo: {
		marginRight: '1em',
		width: '100px',
		[theme.breakpoints.up('md')]: {
			width: '140px',
		},
	},
	appBar: {
		backgroundColor: 'rgba(0,0,0,0.75)',
	},
	langButton: {
		border: '1px solid white',
		marginLeft: '1.2em',
		marginRight: 0,
		paddingLeft: 0,
		paddingRight: 0,
		minWidth: '45px',
	},
});

@translate(['translations', 'nav'], { wait: true })
class NavBar extends Component {
	render() {
		const props = this.props;
		const { t } = this.props;
		const toggle = lng => i18n.changeLanguage(lng);
		return (
			<AppBar position="fixed" className={props.classes.appBar}>
				<Toolbar>
					<Hidden mdUp>
						<IconButton
							onClick={props.toggle}
							className={props.classes.menuButton}
							color="inherit"
							aria-label="Menu"
						>
							<MenuIcon />
						</IconButton>
					</Hidden>
					<Typography
						className={props.classes.flex}
						variant="title"
						color="inherit"
					>
						<Link to="/">
							<img
								src={`${process.env.PUBLIC_URL}/images/codestar_logo_dark.svg`}
								alt="Codestar Logo"
								className={props.classes.logo}
							/>
						</Link>
						<Button
							onClick={() => toggle('nl')}
							variant={i18n.language === 'nl' ? 'raised' : 'flat'}
							color="inherit"
							className={props.classes.langButton}
						>
							{t('nav:LINK_NL')}
						</Button>
						<Button
							onClick={() => toggle('en')}
							variant={i18n.language === 'en' ? 'raised' : 'flat'}
							color="inherit"
							className={props.classes.langButton}
						>
							{t('nav:LINK_EN')}
						</Button>
					</Typography>
					<Hidden smDown>
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
	}
}

export default compose(
	withStyles(styles),
	withWidth()
)(NavBar);
