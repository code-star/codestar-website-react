import React from 'react';
import { Link } from 'react-router-dom';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Drawer from 'material-ui/Drawer';

import DashboardIcon from 'material-ui-icons/Dashboard';
import PeopleIcon from 'material-ui-icons/People';
import CodeIcon from 'material-ui-icons/Code';
import EmailIcon from 'material-ui-icons/Email';

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
					<ListItem button key={item.text}>
						<ListItemIcon>{item.icon}</ListItemIcon>
						<Link to={item.link}>
							<ListItemText primary={item.text} />
						</Link>
					</ListItem>
				))}
			</List>
		</div>
	</Drawer>
);

export default SideMenu;
