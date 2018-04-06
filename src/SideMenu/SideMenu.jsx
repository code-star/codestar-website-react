import React from 'react';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Drawer from 'material-ui/Drawer';

import DashboardIcon from 'material-ui-icons/Dashboard';
import PeopleIcon from 'material-ui-icons/People';
import CodeIcon from 'material-ui-icons/Code';
import EmailIcon from 'material-ui-icons/Email';

const list = [
	{
		text: 'Cases',
		icon: <DashboardIcon />,
	},
	{
		text: 'About',
		icon: <PeopleIcon />,
	},
	{
		text: 'Jobs',
		icon: <CodeIcon />,
	},
	{
		text: 'Contact',
		icon: <EmailIcon />,
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
						<ListItemText primary={item.text} />
					</ListItem>
				))}
			</List>
		</div>
	</Drawer>
);

export default SideMenu;
