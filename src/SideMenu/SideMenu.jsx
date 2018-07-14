import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { translate } from 'react-i18next';

import {
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Drawer,
} from '@material-ui/core';
import {
	Dashboard as DashboardIcon,
	Business as BusinessIcon,
	People as PeopleIcon,
	Code as CodeIcon,
	Email as EmailIcon,
} from '@material-ui/icons';

const list = [
	{
		text: 'Home',
		icon: <DashboardIcon />,
		link: '/',
	},
	{
		text: 'Cases',
		icon: <BusinessIcon />,
		link: '/cases',
	},
	{
		text: 'ABOUT',
		icon: <PeopleIcon />,
		link: '/about',
	},
	{
		text: 'Jobs',
		icon: <CodeIcon />,
		link: '/jobs',
	},
	{
		text: 'Contact',
		icon: <EmailIcon />,
		link: '/contact',
	},
];

@translate(['nav'], { wait: true })
class SideMenu extends Component {
	render() {
		const { t, ...props } = this.props;
		return (
			<Drawer open={props.open} onClose={props.toggle}>
				<div
					tabIndex={0}
					role="button"
					onClick={props.toggle}
					onKeyDown={props.toggle}
				>
					<List>
						{list.map(item => (
							<Link to={item.link} key={t(item.text)}>
								<ListItem button>
									<ListItemIcon>{item.icon}</ListItemIcon>
									<ListItemText primary={t(item.text)} />
								</ListItem>
							</Link>
						))}
					</List>
				</div>
			</Drawer>
		);
	}
}

export default SideMenu;
