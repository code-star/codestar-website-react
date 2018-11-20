import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import NavBar from '../../components/Molecules/NavBar/NavBar';
import SideMenu from '../../SideMenu/SideMenu';
import { getCachedUpcomingEvents } from '../../eventsService';

export default class NavContainer extends Component {
  state = {
    drawerMenu: false,
    nextEvent: null,
  };

  componentDidMount() {
    this.fetchUpcomingEvent.call(this);
  }

  async fetchUpcomingEvent() {
    try {
      const response = await getCachedUpcomingEvents();
      const nextEvent = response && response.length > 0 ? response[0] : null;
      if (nextEvent) {
        this.setState({ nextEvent });
      }
    } catch (err) {
      // fail silently
    }
  }

  toggleDrawer = () => {
    this.setState(prevState => {
      return {
        drawerMenu: !prevState.drawerMenu,
      };
    });
  };

  render() {
    return (
      <Fragment>
        <NavBar toggle={this.toggleDrawer} nextEvent={this.state.nextEvent} />
        <SideMenu
          open={this.state.drawerMenu}
          toggle={this.toggleDrawer}
          history={this.props.history}
          nextEvent={this.state.nextEvent}
        />
      </Fragment>
    );
  }
}

NavContainer.propTypes = {
  history: PropTypes.object.isRequired,
};
