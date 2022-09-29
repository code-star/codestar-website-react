import * as React from 'react';
import { Link } from 'react-router-dom';
import { translate } from 'react-i18next';

import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  Link as MuiLink,
} from '@material-ui/core';
import {
  Dashboard as DashboardIcon,
  Code as CodeIcon,
  Email as EmailIcon,
  Event as EventIcon,
} from '@material-ui/icons';

// Mui v3 workaround
const MyRouterLink = (to: string) => (props: any) => (
  <Link to={to} {...props} />
);
const MyMuiLink = (to: string) => (props: any) => (
  <MuiLink href={to} {...props} />
);

type SideMenuProps = any;
type SideMenuState = any;

interface IListItemData {
  text: string;
  icon: React.ReactElement;
  link: string;
  canHaveNotification?: boolean;
}

const list: IListItemData[] = [
  {
    text: 'Home',
    icon: <DashboardIcon />,
    link: '/',
  },
  {
    text: 'Events',
    icon: <EventIcon />,
    link: '/events',
    canHaveNotification: true,
  },
  {
    text: 'Codelancer',
    icon: <CodeIcon />,
    link: '/codelancer',
  },
  {
    text: 'Contact',
    icon: <EmailIcon />,
    link: 'https://www.ordina.nl/vakgebieden/scala/',
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
    const ListItemContent = (item: IListItemData) => {
      return (
        <>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText
            primary={this.getPrimaryText(item)}
            primaryTypographyProps={
              this.state.location === item.link
                ? { color: 'primary', style: { fontWeight: 500 } }
                : undefined
            }
          />
        </>
      );
    };
    return (
      <Drawer open={props.open} onClose={props.toggle}>
        <div
          tabIndex={0}
          role="button"
          onClick={props.toggle}
          onKeyDown={props.toggle}
        >
          <List>
            {list.map(item => {
              const isExteralLink = item.link.indexOf('http') === 0;
              const LinkComponent = isExteralLink ? MyMuiLink(item.link) : MyRouterLink(item.link);
              return (
                <ListItem component={LinkComponent} key={item.text}>
                  <ListItemContent {...item} />
                </ListItem>
              );
            })}
          </List>
        </div>
      </Drawer>
    );
  }

  private getPrimaryText(item: any) {
    const { t } = this.props;
    const notificationIcon = this.props.nextEvent ? (
      <span style={{ color: 'red' }}> ●</span>
    ) : null;
    if (item.canHaveNotification) {
      return (
        <>
          {t(item.text)}
          {notificationIcon}
        </>
      );
    }
    return t(item.text);
  }
}

export default translate(['nav'], { wait: true })(SideMenu);
