import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';

import { Button } from '@material-ui/core';
import { Notifications as NotificationImportantIcon } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';

const styles = theme => ({
	newEventIcon: {
		color: 'red',
		marginRight: theme.spacing.unit,
	},
	newEventIconHover: {
		color: 'inherit',
	},
});

class EventsButton extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isHovering: false,
		};
	}

	handleMouseOver() {
		this.setState({ isHovering: true });
	}

	handleMouseOut() {
		this.setState({ isHovering: false });
	}

	// TODO get first event from Meetup.com
	render() {
		const iconClasses = `${this.props.classes.newEventIcon} ${
			this.state.isHovering ? this.props.classes.newEventIconHover : null
		}`;
		return (
			<Tooltip
				title="26 September: Meetup Data Oriented Design"
				placement="bottom"
			>
				{/*TODO how to do this for mobile?*/}
				<Button
					component={Link}
					to="/events"
					color="inherit"
					onMouseOver={this.handleMouseOver.bind(this)}
					onMouseOut={this.handleMouseOut.bind(this)}
				>
					<NotificationImportantIcon className={iconClasses} />
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
