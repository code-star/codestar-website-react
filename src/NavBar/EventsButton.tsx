import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import compose from 'recompose/compose';

import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import i18n from '../i18n';

// Fixme: this is a workaround for using the material ui button
// with the `to` property. By default this is not supported.
const CustomButton = (props: any) => <Button {...props} />;

// TODO improve types by replacing "any"
interface IEventsButtonPropsInner {
	classes: Record<string, string>;
	label: string;
	nextEvent: any;
}

interface IEventsButtonPropsOuter {
	label: string;
	nextEvent: any;
}

interface IEventsButtonState {
	isHovering: boolean;
}

const styles = (theme: any) => ({
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

// TODO to stateless with https://jsfiddle.net/evenchange4/p3vsmrvo/1599/
export class EventsButton extends Component<
	IEventsButtonPropsInner,
	IEventsButtonState
> {
	constructor(props: IEventsButtonPropsInner) {
		super(props);
		this.state = {
			isHovering: false,
		};
		this.handleMouseOver = this.handleMouseOver.bind(this);
		this.handleMouseOut = this.handleMouseOut.bind(this);
	}

	public handleMouseOver() {
		this.setState({ isHovering: true });
	}

	public handleMouseOut() {
		this.setState({ isHovering: false });
	}

	public render() {
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
				<CustomButton
					component={Link}
					to="/events"
					color="inherit"
					onMouseOver={this.handleMouseOver}
					onMouseOut={this.handleMouseOut}
				>
					{label}
					{icon}
				</CustomButton>
			</Tooltip>
		);
	}
}

export default compose<IEventsButtonPropsInner, IEventsButtonPropsOuter>(
	withStyles(styles)
)(EventsButton);
