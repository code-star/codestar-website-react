import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import NavBar from '../../components/Molecules/NavBar/NavBar';
import NavBarFunctional from '../../components/Molecules/NavBar/NavBarFunctional';
import SideMenu from '../../SideMenu/SideMenu';
import { getCachedUpcomingEvents } from '../../eventsService';






function handleClick() {


}



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
        {/* <NavBar toggle={this.toggleDrawer} nextEvent={this.state.nextEvent} /> */}

        <NavBarFunctional show={this.toggleDrawer} nextEvent={this.state.nextEvent} />

        <SideMenu
          open={this.state.drawerMenu}
          toggle={this.toggleDrawer}
          history={this.props.history}
          nextEvent={this.state.nextEvent}
        />

        {/* { With this button I wanted to create a switch between the two 
          navbars for quick comparison. But didn't get to it yet. 
          */}
        <button onClick={handleClick}
          style={{ position: "absolute", left: "200px", top: "300px", zIndex: "1" }}>click me</button>
      </Fragment>
    );
  }
}

NavContainer.propTypes = {
  history: PropTypes.object.isRequired,
};
