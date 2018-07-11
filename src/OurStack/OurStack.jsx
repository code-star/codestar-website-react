import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import Tooltip from 'material-ui/Tooltip';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import { translate } from 'react-i18next';
import Grow from 'material-ui/transitions/Grow';

import techs from './techs';

const styles = theme => ({
	root: {
		...theme.mixins.gutters(),
		marginBottom: theme.spacing.unit * 1,
		paddingTop: theme.spacing.unit * 1.5,
		paddingBottom: theme.spacing.unit * 1.5,
	},
	icon: {
		marginLeft: 10,
	},
});

@translate(['stack'], { wait: true })
class OurStack extends Component {
	render() {
		const { t, classes } = this.props;

		function techIcons(techs) {
			return (
				<div className="row">
					{techs.map(item => (
						<Tooltip
							key={item.logo}
							title={item.name} // TODO: Description why we chose a tech
						>
							<Grow in>
								<Avatar
									className={classes.icon}
									alt={item.name}
									src={item.logo}
								/>
							</Grow>
						</Tooltip>
					))}
				</div>
			);
		}

		return (
			<div>
				{/* TODO: clean up */}
				{/* TODO: better handling of small screen size */}
				<Paper className={classes.root} elevation={1}>
					<div className="row justify-content-between">
						<div className="col-auto mb-1">
							{t('STACK_FRONT_END')}
							<Typography variant="caption">
								{t('STACK_FRONT_END_SUBTITLE')}
							</Typography>
						</div>
						<div className="col-auto mr-1">{techIcons(techs.frontEnd)}</div>
					</div>
				</Paper>
				<Paper className={classes.root} elevation={1}>
					<div className="row justify-content-between">
						<div className="col-auto mb-1">
							{t('STACK_BACK_END')}
							<Typography variant="caption">
								{t('STACK_BACK_END_SUBTITLE')}
							</Typography>
						</div>
						<div className="col-auto mr-1">{techIcons(techs.backEnd)}</div>
					</div>
				</Paper>
				<Paper className={classes.root} elevation={1}>
					<div className="row justify-content-between">
						<div className="col-auto mb-1">
							{t('STACK_INFRASTRUCTURE')}
							<Typography variant="caption">
								{t('STACK_INFRASTRUCTURE_SUBTITLE')}
							</Typography>
						</div>
						<div className="col-auto mr-1">
							{techIcons(techs.infrastructure)}
						</div>
					</div>
				</Paper>
			</div>
		);
	}
}

export default withStyles(styles)(OurStack);
