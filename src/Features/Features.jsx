import React from 'react';
import Grid from 'material-ui/Grid';

import FeatureCard from '../FeatureCard/FeatureCard';

import LogoTheRightPeople from '../img/Features/Features_TheRightPeople.svg';
import LogoTheRightMethod from '../img/Features/Features_TheRightMethod.svg';
import LogoTheRightTechnologies from '../img/Features/Features_TheRightTechnologies.svg';
import LogoTheRightPartners from '../img/Features/Features_TheRightPartners.svg';
import LogoTheRightIntegration from '../img/Features/Features_TheRightIntegration.svg';

const features = [
	{
		id: 'the-right-people',
		title: 'The right people',
		logo: LogoTheRightPeople,
		text:
			'We offer you the best programmers. People who are passionate about their job and get results. No vague tales, but functional and easy to maintain code.',
	},
	{
		id: 'the-right-method',
		title: 'The right method',
		logo: LogoTheRightMethod,
		text:
			'We work with Agile, DevOps and Full Stack, from Back-end to Front-end. Using the latest methodologies, such as Continuous Integration and Continuous Delivery, you can follow the results live from day one.',
	},
	{
		id: 'the-right-technologies',
		title: 'The right technologies',
		logo: LogoTheRightTechnologies,
		text:
			'We opt for responsiveness, scalability and resilience. That’s why we choose the latest technologies, such as Scala, Akka, React, Docker, Typescript, Spark, Kafka and Samza, and these technologies work. We have successfully reduced the existing code at a client by 75%. That’s 75% less chance for errors.',
	},
	{
		id: 'the-right-partners',
		title: 'The right partners',
		logo: LogoTheRightPartners,
		text:
			'We are Lightbend certified for consulting and training and use the platform of modern platforms: the Lightbend Reactive Platform. This platform was developed to scale, even when you only ever have peak hours or peak days.',
	},
	{
		id: 'the-right-integration',
		title: 'The right integration',
		logo: LogoTheRightIntegration,
		text:
			'We integrate seamlessly with your current Java landscape, because Scala speaks Java. This means you don’t have to start from the beginning, as we reuse your old Java software where necessary. Nor does our help end when a project ends. We’re in it for the long run, so also on the maintenance front.',
	},
];

const styles = {
	container: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		minHeight: '100vh',
		padding: '1rem 0',
	},
	h2: {
		textAlign: 'center',
		color: 'white',
	},
	p: {
		color: 'white',
	},
	section: {
		backgroundColor: '#4b4b4b',
	},
};

const Features = () => (
	<section style={styles.section}>
		<div className="container" style={styles.container}>
			<Grid container justify="center">
				<Grid item xs={12} md={8}>
					<h2 style={styles.h2}>TIME TO TAKE THE NEXT STEP</h2>
				</Grid>

				<Grid item xs={12} md={6}>
					<p style={styles.p}>
						Now more than ever, IT is the carrier, deliverer and enricher of
						your business. You will quickly fall behind without an outstanding
						digital infrastructure. With data in abundance, where do you start?
						In the past, if someone asked you for water, you grabbed a bucket
						and went to the well. Today, we’re dealing with a waterfall of data.
						Good luck with your bucket.
					</p>
				</Grid>

				<Grid item xs={12} md={6}>
					<p style={styles.p}>
						Fortunately, the growth in the amount of data has coincided with the
						development of technologies to work with that data. The modern
						internet, mobile phone use and the ‘Internet of Things’ demands
						more. At, we use Scala, Front-end and BigData technologies to create
						state-of-the-art software which enables you to confront challenges
						head on. Whether you need a bigger bucket, more buckets or just a
						decent pipeline, we can create it for you..
					</p>
				</Grid>

				<Grid item xs={12}>
					<h2 style={styles.h2}>WHY WHAT WE DO DOES WORK</h2>

					<Grid container justify="center">
						{features.map(feature => (
							<Grid key={feature.title} item xs={12} md={4}>
								<FeatureCard {...feature} />
							</Grid>
						))}
					</Grid>
				</Grid>
			</Grid>
		</div>
	</section>
);

export default Features;
