import React from 'react';

import CaseDetailsING from '../CaseDetails/CaseDetailsING';
import CaseDetailsSKG from '../CaseDetails/CaseDetailsSKG';
import CaseDetailsPortRotterdam from '../CaseDetails/CaseDetailsPortRotterdam';

const casesList = [
	{
		client: 'Rabobank',
		title: 'Helping developers and bankers to speak the same language again',
		text: [
			'We tackled the method for calculating mortgages for Rabobank’s Dutch mortgage business (Rabobank Hyptheekdossier). The existing Java code had, over time, become so complex that it was difficult to understand and test. Developers and bankers were no longer speaking the same language.',
			'We made the code simple, readable and testable by developing a DSL in Scala. Not just for programmers, but for the business too. And we did all that with a fraction of the amount of code needed for the old implementation in Java. Eventually, not only was the business able to read the code, they were also able to implement calculations themselves. The business that speaks the language of the programmer. Goal achieved.',
		],
		backgroundImage:
			'https://image.shutterstock.com/z/stock-photo-utrecht-netherlands-april-rabobank-headquarters-building-rabobank-is-a-dutch-211390258.jpg',
	},
	{
		client: 'ING',
		title: 'Innovate in fintech',
		text: [
			'A demanding client where Codestar contributes to innovation on the project for straight-through appointment scheduling.',
		],
		details: <CaseDetailsING />,
		backgroundImage:
			'https://image.shutterstock.com/z/stock-photo-london-uk-january-th-the-homepage-of-the-official-website-for-the-ing-group-the-dutch-1013358685.jpg',
	},
	{
		client: 'SKG',
		title: 'Not an optimisation, but a complete renewal',
		text: [
			'A classic example of a client with an application that fails to meet modern demands. The client needs a new payment platform that supports apps and modern devices, enables them to go live quickly with new features and is easier to manage. The current outdated platform was completely custom developed in-house for SKG, including hosting and physical servers. We are building a new reactive platform that scales, is easy to maintain, uses the latest technologies and methodologies, such as Microservices, Platform as a Service and Continuous Delivery.',
		],
		details: <CaseDetailsSKG />,
		backgroundImage:
			'https://www.skggouda.nl/storage/app/media/_mediathumbs/banners-cropped-images-SKG%20sfeerbeelden-adviesopmaat-0-326-1500-562-1485443956-df9f1ec873b883e8004d80f6aced3963.jpg',
	},
	{
		client: 'Port of Roterdam',
		title: 'Rediscovering the port together',
		text: [
			'An innovative project that aims to realise a pilot application for the verification of an extremely promising new business concept for the entire port. And the entire port really does mean the entire port. So involving a lot of stakeholders, which in turn involves a lot of discussion.',
			'Short feedback loops were essential for deciding the direction of the pilot. Using a fully cloud-based development route made it possible to demonstrate functionality in the product environment from week one, and give shape to the short feedback loops. So no meetings about abstract software diagrams, but about working software. Agile, as agile is meant to be.',
		],
		details: <CaseDetailsPortRotterdam />,
		backgroundImage:
			'https://image.shutterstock.com/z/stock-photo-large-container-vessel-unloaded-in-port-of-rotterdam-283990010.jpg',
	},
	{
		client: '42 Education',
		title: 'Using code to kick-start a lean start-up',
		text: [
			'Having a start-up as a client means major time constraints, requires enormous flexibility and the ability to switch at lightning speed in an informal environment. We were productive from day one thanks to our choice of the latest Continuous Delivery and Cloud technologies.',
			'The goal was to let children learn by playing games with friends, real-time with an enormous number of events. With this in mind, we made the software architecture completely reactive. We used real-time event notification based on reactive streams and horizontally scaling event persistence based on event sourcing with Cassandra.',
		],
		backgroundImage: 'images/cases/42education.jpg',
	},
	{
		client: 'Gracenote Sports',
		title: 'Winter Olympics',
		text: ['Lorem'],
		backgroundImage:
			'https://image.shutterstock.com/z/stock-photo-pyeongchang-south-korea-february-olympic-champion-martin-fourcade-of-france-1029727372.jpg',
	},
];

export default casesList;
