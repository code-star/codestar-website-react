import React from 'react';

import { GridList, GridListTile } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const ClientsList = [
	{
		name: 'ING',
		logo: `/images/clients/ing.png`,
		color: '#ee6f33',
	},
	{
		name: 'Port of Rotterdam',
		logo: `/images/clients/port_of_rotterdam.svg`,
		featured: true,
		background: `/images/clients/harbor.jpg`,
	},
	{
		name: 'SKG',
		logo: `/images/clients/skg.svg`,
		color: '#9D1535',
	},
	{
		name: 'Rabobank',
		logo: `/images/clients/rabobank-2.svg`,
		color: '#001090',
	},
	{
		name: 'Gracenote',
		logo: `/images/clients/gracenote.svg`,
		featured: true,
		background: `/images/clients/winter_olympics.jpg`,
	},
	{
		name: '42 Education',
		logo: `/images/clients/42_education.png`,
		color: '#222',
	},
];

const styles = {
	gridList: {
		// Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
		transform: 'translateZ(0)',
	},
};

const Clients = props => (
	<div className="mt-3">
		<GridList cellHeight={200} cols={4} className={props.classes.gridList}>
			{ClientsList.map(client => {
				return (
					<GridListTile key={client.name} cols={client.featured ? 2 : 1}>
						{client.featured ? (
							<div
								className="row justify-content-center align-items-center ml-0 mr-0"
								style={{
									background: `linear-gradient( rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url('${
										client.background
									}')`,
									backgroundSize: 'cover, cover',
									backgroundPosition: 'center',
									width: '100%',
									height: '100%',
								}}
							>
								<div className="col-12 col-md-6">
									<img src={client.logo} alt={client.name} />
								</div>
								{/*
								// TODO: Do we want quotes from clients?
								<GridListTileBar
									title={'Insert very awesome quote frome client here.'}
									subtitle={<span>John Smith</span>}
								/>
								*/}
							</div>
						) : (
							<div
								style={{
									padding: '1.5em',
									backgroundColor: client.color ? client.color : 'transparent',
									width: '100%',
									height: '100%',
								}}
							>
								<div
									style={{
										backgroundImage: `url(${client.logo})`,
										backgroundSize: 'contain',
										backgroundPosition: 'center',
										backgroundRepeat: 'no-repeat',
										width: '100%',
										height: '100%',
									}}
								/>
							</div>
						)}
					</GridListTile>
				);
			})}
		</GridList>
	</div>
);

export default withStyles(styles)(Clients);

/*
<Typography variant="headline" gutterBottom>
			{props.title || 'Clients'}
		</Typography>
		<div className="row">
			{ClientsList.map(client => (
				<div className={`col-6 col-md-2 ${css.imgWrapper}`} key={client.name}>
					<ResponsiveImage
						path={client.logo}
						alt={`${client.name} logo`}
						title={`${client.name}`}
						sizes="(min-width: 600) 16.6666vw, 100vw"
						className="w-100 h-auto"
					/>
				</div>
			))}
		</div>
 */
