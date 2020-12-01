import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import NavBar from '../../components/Molecules/NavBar/NavBar';
import SideMenu from '../../SideMenu/SideMenu';
import { getCachedUpcomingEvents } from '../../eventsService';
import NavBarFunc from '../../components/Molecules/NavBar/NavBarFunc';

export default class NavContainer extends Component {
  state = {
    drawerMenu: false,
    nextEvent: null,
    showNav: true
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

  showOtherNav = () => {
    this.setState(prevState => {
      console.log("hello I am state", prevState)
      return { ...prevState, showNav: !prevState.showNav }

    });
  };


  render() {
    const showNav = this.state.showNav;
    return (
      <Fragment>

        {showNav ? <NavBar toggle={this.toggleDrawer} nextEvent={this.state.nextEvent} /> : <NavBarFunc />}
        {console.log(this.showNav)}
        <SideMenu
          open={this.state.drawerMenu}
          toggle={this.toggleDrawer}
          history={this.props.history}
          nextEvent={this.state.nextEvent}
        />

        <button onClick={this.showOtherNav} style={{ top: "200px", position: "absolute", left: "200px", zIndex: "1" }}>Change nav</button>
      </Fragment>
    );
  }
}

NavContainer.propTypes = {
  history: PropTypes.object.isRequired,
};
