import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import Tooltip from 'material-ui/Tooltip';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import { translate } from 'react-i18next';

import techs from './techs';

const styles = theme => ({
	root: {
		...theme.mixins.gutters(),
		marginBottom: theme.spacing.unit * 1,
		paddingTop: theme.spacing.unit * 1.5,
		paddingBottom: theme.spacing.unit * 1.5,
	},
	icon: {
		marginRight: 10,
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
							title={`${item.name} - A short description of the stack choice`}
						>
							<Avatar
								className={classes.icon}
								alt={item.name}
								src={item.logo}
							/>
						</Tooltip>
					))}
				</div>
			);
		}

		return (
			<div>
				{/* TODO: clean up */}
				<Paper className={classes.root} elevation={1}>
					<div className="row justify-content-between">
						<div className="col-auto">
							Front-end<Typography variant="caption">
								Reactive and responsive
							</Typography>
						</div>
						<div className="col-auto">{techIcons(techs.frontEnd)}</div>
					</div>
				</Paper>
				<Paper className={classes.root} elevation={1}>
					<div className="row justify-content-between">
						<div className="col-auto">
							Back-end<Typography variant="caption">
								Scalable and powerful
							</Typography>
						</div>
						<div className="col-auto">{techIcons(techs.backEnd)}</div>
					</div>
				</Paper>
				<Paper className={classes.root} elevation={1}>
					<div className="row justify-content-between">
						<div className="col-auto">
							Infrastructure<Typography variant="caption">
								In the cloud and modular
							</Typography>
						</div>
						<div className="col-auto">{techIcons(techs.infrastructure)}</div>
					</div>
				</Paper>
			</div>
		);
	}
}

export default withStyles(styles)(OurStack);

/*

For each layer, a paper
heading on the left
round icons with tech logo align on the right
each has a tooltip

				<h3>{t('STACK_TITLE')}</h3>
				<ul>{techs.map((tech, i) => <li key={i}>{tech.name}</li>)}</ul>
 */
