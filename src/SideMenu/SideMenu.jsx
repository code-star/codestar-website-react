import React from 'react';
import { Link } from 'react-router-dom';

import {
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Drawer,
} from '@material-ui/core';
import {
	Dashboard as DashboardIcon,
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
		icon: <DashboardIcon />,
		link: '/cases',
	},
	{
		text: 'About',
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

const SideMenu = props => (
	<Drawer open={props.open} onClose={props.toggle}>
		<div
			tabIndex={0}
			role="button"
			onClick={props.toggle}
			onKeyDown={props.toggle}
		>
			<List>
				{list.map(item => (
					<Link to={item.link} key={item.text}>
						<ListItem button>
							<ListItemIcon>{item.icon}</ListItemIcon>
							<ListItemText primary={item.text} />
						</ListItem>
					</Link>
				))}
			</List>
		</div>
	</Drawer>
);

export default SideMenu;
