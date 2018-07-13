import React, { Component } from 'react';
import { translate } from 'react-i18next';

import { Paper, Avatar, Tooltip, Typography, Grow } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

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
				<div>
					{techs.map(item => (
						<Tooltip
							key={item.logo}
							title={item.name} // TODO: Description why we chose a tech
						>
							<Grow in>
								<Avatar
									className={'d-inline-block ' + classes.icon}
									alt={item.name}
									src={item.logo}
								/>
							</Grow>
						</Tooltip>
					))}
				</div>
			);
		}

		const parts = [
			{
				title: 'STACK_FRONT_END',
				caption: 'STACK_FRONT_END_SUBTITLE',
				icons: techs.frontEnd,
			},
			{
				title: 'STACK_BACK_END',
				caption: 'STACK_BACK_END_SUBTITLE',
				icons: techs.backEnd,
			},
			{
				title: 'STACK_INFRASTRUCTURE',
				caption: 'STACK_INFRASTRUCTURE_SUBTITLE',
				icons: techs.infrastructure,
			},
		];

		return (
			<div>
				{parts.map(part => (
					<Paper
						key={part.title}
						className={'pb-2 ' + classes.root}
						elevation={1}
					>
						<div className="row justify-content-between">
							<div className="col-12 col-sm-4">
								{t(part.title)}
								<Typography variant="caption">{t(part.caption)}</Typography>
							</div>
							<div className="col-12 col-sm-8 text-right px-2 mt-2 mt-md-0">
								{techIcons(part.icons)}
							</div>
						</div>
					</Paper>
				))}
			</div>
		);
	}
}

export default withStyles(styles)(OurStack);
