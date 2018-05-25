import React from 'react';
import Typography from 'material-ui/Typography';
import ResponsiveImage from '../ResponsiveImage/ResponsiveImage';

const ClientsList = [
	{
		name: 'ING',
		logo: `/images/clients/ing.svg`,
	},
	{
		name: 'Rabobank',
		logo: `/images/clients/rabobank.svg`,
	},
	{
		name: 'Port of Rotterdam',
		logo: `/images/clients/port_of_rotterdam.png`,
	},
	{
		name: 'SKG',
		logo: `/images/clients/skg.png`,
	},
	{
		name: '42 Education',
		logo: `/images/clients/42_education.png`,
	},
	{
		name: 'Gracenote',
		logo: `/images/clients/gracenote.svg`,
	},
];

const Clients = props => (
	<div>
		<Typography variant="headline" gutterBottom>
			{props.title || 'Clients'}
		</Typography>
		<div className="row">
			{ClientsList.map(client => (
				<div className="col-6 col-md-2" key={client.name}>
					<ResponsiveImage
						path={client.logo}
						alt={`${client.name} logo`}
						title={`${client.name}`}
						sizes="(min-width: 600) 16.6666vw, 100vw"
						className="w-100 h-auto mt-3"
					/>
				</div>
			))}
		</div>
	</div>
);

export default Clients;
