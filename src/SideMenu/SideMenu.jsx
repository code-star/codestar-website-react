import React from 'react';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Drawer from 'material-ui/Drawer';

import InboxIcon from 'material-ui-icons/Inbox';
import DraftsIcon from 'material-ui-icons/Drafts';

const list = [
	{
		text: 'Cases',
		icon: <InboxIcon />,
	},
	{
		text: 'About',
		icon: <InboxIcon />,
	},
	{
		text: 'Jobs',
		icon: <InboxIcon />,
	},
	{
		text: 'Contact',
		icon: <DraftsIcon />,
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
