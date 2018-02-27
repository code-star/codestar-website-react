import React from 'react';
import Grid from 'material-ui/Grid';

import FeatureCard from '../FeatureCard/FeatureCard';

const features = [
	{
		title: 'The right people',
		logo: '',
		text:
			'We offer you the best programmers. People who are passionate about their job and get results. No vague tales, but functional and easy to maintain code.',
	},
	{
		title: 'The right method',
		logo: '',
		text:
			'We work with Agile, DevOps and Full Stack, from Back-end to Front-end. Using the latest methodologies, such as Continuous Integration and Continuous Delivery, you can follow the results live from day one.',
	},
	{
		title: 'The right technologies',
		logo: '',
		text:
			'We opt for responsiveness, scalability and resilience. That’s why we choose the latest technologies, such as Scala, Akka, React, Docker, Typescript, Spark, Kafka and Samza, and these technologies work. We have successfully reduced the existing code at a client by 75%. That’s 75% less chance for errors.',
	},
	{
		title: 'The right partners',
		logo: '',
		text:
			'We are Lightbend certified for consulting and training and use the platform of modern platforms: the Lightbend Reactive Platform. This platform was developed to scale, even when you only ever have peak hours or peak days.',
	},
	{
		title: 'The right integration',
		logo: '',
		text:
			'We integrate seamlessly with your current Java landscape, because Scala speaks Java. This means you don’t have to start from the beginning, as we reuse your old Java software where necessary. Nor does our help end when a project ends. We’re in it for the long run, so also on the maintenance front.',
	},
];

const Features = () => (
	<div>
		{/* Bootstrap way
		
		<div className="row justify-content-around">
			{features.slice(0, 3).map(feature => <FeatureCard className="col-3 my-3" {...feature} />)}
		</div>

		<div className="row justify-content-around">
			{features.slice(3).map(feature => <FeatureCard className="col-3 my-3" {...feature} />)}
		</div>

		*/}

		<Grid container>
			<Grid item xs={12}>
				<Grid container justify="center">
					{features.slice(0, 3).map(feature => (
						<Grid key={feature.title} item xs={12} md={3}>
							<FeatureCard {...feature} />
						</Grid>
					))}
				</Grid>
			</Grid>
		</Grid>

		<Grid container>
			<Grid item xs={12}>
				<Grid container justify="center">
					{features.slice(3).map(feature => (
						<Grid key={feature.title} item xs={12} md={3}>
							<FeatureCard {...feature} />
						</Grid>
					))}
				</Grid>
			</Grid>
		</Grid>
	</div>
);

export default Features;
