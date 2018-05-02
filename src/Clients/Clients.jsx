import React from 'react';

const ClientsList = [
	{
		name: 'ING',
		logo: '/images/clients/ing.svg',
	},
	{
		name: 'Rabobank',
		logo: '/images/clients/rabobank.svg',
	},
	{
		name: 'Port of Rotterdam',
		logo: '/images/clients/port_of_rotterdam.png',
	},
	{
		name: 'SKG',
		logo: '/images/clients/skg.png',
	},
	{
		name: '42 Education',
		logo: '/images/clients/42_education.png',
	},
	{
		name: 'Gracenote',
		logo: '/images/clients/gracenote.svg',
	},
];

const Clients = props => (
	<div>
		<h3>{props.title || 'Clients'}</h3>
		<div className="row">
			{ClientsList.map(client => (
				<div className="col-6 col-md-4 col-lg" key={client.name}>
					<img
						src={client.logo}
						alt={`${client.name} logo`}
						title={`${client.name}`}
						className="w-100 h-auto mt-3"
					/>
				</div>
			))}
		</div>
	</div>
);

export default Clients;
