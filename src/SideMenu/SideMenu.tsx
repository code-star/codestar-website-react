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
    externalLink: true,
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
            {list.map(item => {
              if (item.externalLink) {
                <Link
                  to={item.link}
                  key={t(item.text)}
                  style={{ textDecoration: 'none' }}
                >
                  <ListItem button>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText
                      primary={this.getPrimaryText(item)}
                      primaryTypographyProps={
                        this.state.location === item.link
                          ? { color: 'primary', style: { fontWeight: 500 } }
                          : undefined
                      }
                    />
                  </ListItem>
                </Link>;
              }
              return (
                // TODO refactor duplication with Link above
                <MuiLink
                  href={item.link}
                  key={t(item.text)}
                  style={{ textDecoration: 'none' }}
                >
                  <ListItem button>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText
                      primary={this.getPrimaryText(item)}
                      primaryTypographyProps={
                        this.state.location === item.link
                          ? { color: 'primary', style: { fontWeight: 500 } }
                          : undefined
                      }
                    />
                  </ListItem>
                </MuiLink>
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
