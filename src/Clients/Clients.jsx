import React from 'react';
import compose from 'recompose/compose';

import { GridList, GridListTile } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

import ResponsiveImage from '../ResponsiveImage/ResponsiveImage';

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

const clientsListSmallOrder = [0, 2, 1, 4, 3, 5].map(i => ClientsList[i]);

const styles = {
	gridList: {
		// Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
		transform: 'translateZ(0)',
	},
	background: {
		position: 'absolute',
		width: '100%',
		height: '100%',
		top: 0,
		left: 0,
	},
	faded: {
		background:
			'linear-gradient( rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6))',
	},
};

const Clients = props => {
	const isSmall = !isWidthUp('md', props.width);
	return (
		<div className="mt-3">
			<GridList
				cellHeight={200}
				cols={isSmall ? 2 : 4}
				className={props.classes.gridList}
			>
				{(isSmall ? clientsListSmallOrder : ClientsList).map(client => {
					return (
						<GridListTile key={client.name} cols={client.featured ? 2 : 1}>
							{client.featured ? (
								<div
									className="row justify-content-center align-items-center mx-0"
									style={{ width: '100%', height: '100%' }}
								>
									<div className={props.classes.background}>
										<ResponsiveImage
											path={client.background}
											alt={client.name}
											width="100%"
											height="100%"
											style={{ objectFit: 'cover' }}
										/>
									</div>
									<div
										className={`${props.classes.faded} ${
											props.classes.background
										}`}
									/>
									<div className="col-8 col-md-6">
										<ResponsiveImage
											path={client.logo}
											alt={client.name}
											width="100%"
										/>
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
									className="row justify-content-center align-items-center ml-0 mr-0"
									style={{
										backgroundColor: client.color
											? client.color
											: 'transparent',
										width: '100%',
										height: '100%',
									}}
								>
									<div className="col-10">
										<ResponsiveImage
											path={client.logo}
											alt={client.name}
											width="100%"
										/>
									</div>
								</div>
							)}
						</GridListTile>
					);
				})}
			</GridList>
		</div>
	);
};

export default compose(
	withStyles(styles),
	withWidth()
)(Clients);
