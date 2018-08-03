import * as React from "react";
import { translate } from "react-i18next";

import { Paper, Avatar, Tooltip, Typography, Grow } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import { getResponsiveImageUrl } from "../ResponsiveImage/ResponsiveImage";
import techs from "./techs.json";

type OurStackProps = any;

const styles = (theme: any) => ({
	root: {
		...theme.mixins.gutters(),
		marginBottom: theme.spacing.unit * 1,
		paddingTop: theme.spacing.unit * 1.5,
		paddingBottom: theme.spacing.unit * 1.5
	},
	icon: {
		marginLeft: 10,
		width: 40,
		height: 40
	}
});

class OurStack extends React.Component<OurStackProps> {
	public render() {
		const { t, classes } = this.props;

		function techIcons(techItems: any) {
			return (
				<div className="row">
					{techItems.map((item: any) => (
						<Tooltip
							key={item.logo}
							title={item.name} // TODO: Description why we chose a tech
						>
							<Grow in={true}>
								<Avatar
									className={classes.icon}
									alt={item.name}
									src={getResponsiveImageUrl(item.logo, 80)}
								/>
							</Grow>
						</Tooltip>
					))}
				</div>
			);
		}

		const parts = [
			{
				title: "STACK_FRONT_END",
				caption: "STACK_FRONT_END_SUBTITLE",
				icons: techs.frontEnd
			},
			{
				title: "STACK_BACK_END",
				caption: "STACK_BACK_END_SUBTITLE",
				icons: techs.backEnd
			},
			{
				title: "STACK_INFRASTRUCTURE",
				caption: "STACK_INFRASTRUCTURE_SUBTITLE",
				icons: techs.infrastructure
			}
		];

		return (
			<div>
				{/* TODO: better handling of small screen size */}
				{parts.map(part => (
					<Paper key={part.title} className={classes.root} elevation={1}>
						<div className="row justify-content-between">
							<div className="col-auto mb-1">
								{t(part.title)}
								<Typography variant="caption">{t(part.caption)}</Typography>
							</div>
							<div className="col-auto mr-1">{techIcons(part.icons)}</div>
						</div>
					</Paper>
				))}
			</div>
		);
	}
}

export default translate(["stack"], { wait: true })(
	withStyles(styles)(OurStack)
);
