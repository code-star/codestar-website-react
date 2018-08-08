import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';

import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import i18n from '../i18n';

const styles = theme => ({
	newEventIcon: {
		color: 'red',
		display: 'inline-block',
		fontSize: '1.3rem',
		marginLeft: theme.spacing.unit * 0.5,
	},
	newEventIconHover: {
		color: 'inherit',
	},
	bigTooltip: {
		fontSize: 20,
	},
});

export class EventsButton extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isHovering: false,
		};
		this.handleMouseOver = this.handleMouseOver.bind(this);
		this.handleMouseOut = this.handleMouseOut.bind(this);
	}

	handleMouseOver() {
		this.setState({ isHovering: true });
	}

	handleMouseOut() {
		this.setState({ isHovering: false });
	}

	render() {
		const { classes, label } = this.props;
		const iconClasses = `${classes.newEventIcon} ${
			this.state.isHovering ? classes.newEventIconHover : null
		}`;
		let icon = null;
		let nextEventText = '';
		if (this.props.nextEvent) {
			icon = <span className={iconClasses}> ●</span>;
			const locale = i18n.language === 'nl' ? 'nl-NL' : 'en-US';
			const formattedDate = new Date(
				this.props.nextEvent.time
			).toLocaleDateString(locale, { month: 'long', day: 'numeric' });
			nextEventText = `${formattedDate} *Meetup* ${this.props.nextEvent.name}`;
		}
		return (
			<Tooltip
				title={nextEventText}
				placement="bottom"
				classes={{
					tooltip: classes.bigTooltip,
				}}
			>
				<Button
					component={Link}
					to="/events"
					color="inherit"
					onMouseOver={this.handleMouseOver}
					onMouseOut={this.handleMouseOut}
				>
					{label}
					{icon}
				</Button>
			</Tooltip>
		);
	}
}

EventsButton.propTypes = {
	label: PropTypes.string.isRequired,
};

export default compose(withStyles(styles))(EventsButton);
