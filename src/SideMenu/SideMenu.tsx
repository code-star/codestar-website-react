import * as React from 'react';
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
	Event as EventIcon,
} from '@material-ui/icons';

type SideMenuProps = any;
type SideMenuState = any;

const list = [
	{
		text: 'Home',
		icon: <DashboardIcon />,
		link: '/',
	},
	{
		text: 'Events',
		icon: <EventIcon />,
		link: '/events',
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

class SideMenu extends React.Component<SideMenuProps, SideMenuState> {
	public state: SideMenuState = { location: null };

	public componentDidMount() {
		this.props.history.listen((location: Location) =>
			this.setLocation(location.pathname)
		);
		this.setLocation(this.props.history.location.pathname);
	}

	public setLocation(location: string) {
		this.setState({ location: `/${location.split('/')[1]}` });
	}

	public render() {
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
							<Link
								to={item.link}
								key={t(item.text)}
								style={{ textDecoration: 'none' }}
							>
								<ListItem button>
									<ListItemIcon>{item.icon}</ListItemIcon>
									<ListItemText
										primary={t(item.text)}
										primaryTypographyProps={
											this.state.location === item.link
												? { color: 'primary', style: { fontWeight: 500 } }
												: undefined
										}
									/>
								</ListItem>
							</Link>
						))}
					</List>
				</div>
			</Drawer>
		);
	}
}

export default translate(['nav'], { wait: true })(SideMenu);
