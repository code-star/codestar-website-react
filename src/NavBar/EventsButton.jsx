import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';

import { Button } from '@material-ui/core';
import { Notifications as NotificationImportantIcon } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import { jsonp } from '../util';

const styles = theme => ({
	newEventIcon: {
		color: 'red',
		marginRight: theme.spacing.unit,
	},
	newEventIconHover: {
		color: 'inherit',
	},
});

// Meetup API test console: https://secure.meetup.com/meetup_api/console/?path=/:urlname/events
// page=3 = number of results to return in a page, only need the first 3 results
const GET_UPCOMING_EVENTS_URL =
	'https://api.meetup.com/Code-Star-Night/events?photo-host=secure&page=3&sig_id=226887185&status=upcoming&sig=e3efc6db037cf681181d84ae343459a36afbefd4';

export class EventsButton extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nextEvent: '',
			isHovering: false,
		};
		this.fetchUpcomingEvent = this.fetchUpcomingEvent.bind(this);
		this.handleMouseOver = this.handleMouseOver.bind(this);
		this.handleMouseOut = this.handleMouseOut.bind(this);
		this.fetchUpcomingEvent();
	}

	fetchUpcomingEvent() {
		/* Meetup API only allows JSONP for client-side, non authenticated, api key signed GET requests.
		   must use JSONP conform https://github.com/meetup/api/issues/211
		   Fetch API does not support JSONP. no-cors mode creates an opaque response without data.
		*/
		jsonp(GET_UPCOMING_EVENTS_URL).then(data => {
			const nextEvent = data.data[0];
			if (nextEvent) {
				const formattedDate = new Date(nextEvent.time).toLocaleDateString(
					'en-US',
					{ month: 'long', day: 'numeric' }
				);
				const text = `${formattedDate} *Meetup* ${nextEvent.name}`;
				this.setState({ nextEvent: text });
			}
		});
	}

	handleMouseOver() {
		this.setState({ isHovering: true });
	}

	handleMouseOut() {
		this.setState({ isHovering: false });
	}

	render() {
		const iconClasses = `${this.props.classes.newEventIcon} ${
			this.state.isHovering ? this.props.classes.newEventIconHover : null
		}`;
		const icon =
			this.state.nextEvent !== '' ? (
				<NotificationImportantIcon className={iconClasses} />
			) : null;
		return (
			<Tooltip title={this.state.nextEvent} placement="bottom">
				<Button
					component={Link}
					to="/events"
					color="inherit"
					onMouseOver={this.handleMouseOver}
					onMouseOut={this.handleMouseOut}
				>
					{icon}
					{this.props.label}
				</Button>
			</Tooltip>
		);
	}
}

EventsButton.propTypes = {
	label: PropTypes.string.isRequired,
};

export default compose(withStyles(styles))(EventsButton);
