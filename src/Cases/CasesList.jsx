import AsyncComponent from '../AsyncComponent/AsyncComponent';

const AsyncCaseDetailsING = AsyncComponent(() =>
	import('../CaseDetails/CaseDetailsING')
);
const AsyncCaseDetailsSKG = AsyncComponent(() =>
	import('../CaseDetails/CaseDetailsSKG')
);
const CaseDetailsPortRotterdam = AsyncComponent(() =>
	import('../CaseDetails/CaseDetailsPortRotterdam')
);

const casesList = [
	{
		client: 'Rabobank',
		path: 'rabobank',
		title: 'Helping developers and bankers to speak the same language again',
		image: `/images/cases/stock-photo-utrecht-netherlands-april-rabobank-headquarters-building-rabobank-is-a-dutch-211390258.jpg`,
		logo: `/images/clients/rabobank-2.svg`,
		color: '#001090',
	},
	{
		client: 'ING',
		path: 'ing',
		title: 'Innovate in fintech',
		text: [
			'A demanding client where Codestar contributes to innovation on the project for straight-through appointment scheduling.',
		],
		details: AsyncCaseDetailsING,
		image: `/images/cases/stock-photo-london-uk-january-th-the-homepage-of-the-official-website-for-the-ing-group-the-dutch-1013358685.jpg`,
		logo: `/images/clients/ing.png`,
		color: '#ee6f33',
	},
	{
		client: 'SKG',
		path: 'skg',
		title: 'Not an optimisation, but a complete renewal',
		text: [
			'A classic example of a client with an application that fails to meet modern demands. The client needs a new payment platform that supports apps and modern devices, enables them to go live quickly with new features and is easier to manage. The current outdated platform was completely custom developed in-house for SKG, including hosting and physical servers. We are building a new reactive platform that scales, is easy to maintain, uses the latest technologies and methodologies, such as Microservices, Platform as a Service and Continuous Delivery.',
		],
		details: AsyncCaseDetailsSKG,
		image: `/images/cases/banners-cropped-images-SKG_sfeerbeelden-adviesopmaat-0-326-1500-562-1485443956-df9f1ec873b883e8004d80f6aced3963.jpg`,
		logo: `/images/clients/skg.svg`,
		color: '#9D1535',
	},
	{
		client: 'Port of Roterdam',
		path: 'port-of-rotterdam',
		title: 'Rediscovering the port together',
		text: [
			'An innovative project that aims to realise a pilot application for the verification of an extremely promising new business concept for the entire port. And the entire port really does mean the entire port. So involving a lot of stakeholders, which in turn involves a lot of discussion.',
			'Short feedback loops were essential for deciding the direction of the pilot. Using a fully cloud-based development route made it possible to demonstrate functionality in the product environment from week one, and give shape to the short feedback loops. So no meetings about abstract software diagrams, but about working software. Agile, as agile is meant to be.',
		],
		details: CaseDetailsPortRotterdam,
		image: `/images/cases/stock-photo-large-container-vessel-unloaded-in-port-of-rotterdam-283990010.jpg`,
		logo: `/images/clients/port_of_rotterdam_dark.svg`,
		color: '#002d60',
	},
	{
		client: '42 Education',
		path: '42-education',
		title: 'Using code to kick-start a lean start-up',
		text: [
			'Having a start-up as a client means major time constraints, requires enormous flexibility and the ability to switch at lightning speed in an informal environment. We were productive from day one thanks to our choice of the latest Continuous Delivery and Cloud technologies.',
			'The goal was to let children learn by playing games with friends, real-time with an enormous number of events. With this in mind, we made the software architecture completely reactive. We used real-time event notification based on reactive streams and horizontally scaling event persistence based on event sourcing with Cassandra.',
		],
		image: `/images/cases/42education.jpg`,
		logo: `/images/clients/42_education.png`,
		color: '#222',
	},
	{
		client: 'Gracenote Sports',
		path: 'gracenote-sport',
		title: 'Winter Olympics',
		text: ['Lorem'],
		image: `/images/cases/stock-photo-pyeongchang-south-korea-february-olympic-champion-martin-fourcade-of-france-1029727372.jpg`,
		logo: `/images/clients/gracenote_dark.svg`,
		color: '#e31b23',
	},
];

export default casesList;
