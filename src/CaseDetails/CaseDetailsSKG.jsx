import React from 'react';

import Typography from 'material-ui/Typography';

const CaseDetailsSKG = () => (
	<article>
		<Typography variant="title" gutterBottom>
			About SKG
		</Typography>
		<Typography paragraph>
			SKG, Stichting Kerkelijk Geldbeheer, offers financial services
			specifically tailored for churches and ecclesiastical organisations. Via
			SKG Online, the foundation offers a unique financial application for
			churches and ecclesiastical organisations, tailored to the division of
			tasks and working methods in such organisations. SKG Online offers the
			functionalities their clients expect, such as debit, payment and savings.
			In addition, organisations can indicate precisely which actions their
			employees are authorised to carry out within the system, right up to
			account level. For instance, an extra digital signature may be necessary
			for large amounts.
		</Typography>

		<Typography paragraph>
			The current outdated platform was completely custom developed in-house for
			SKG, including hosting and physical servers. SKG is looking for a new
			payment platform that supports apps and modern devices, enables them to go
			live quickly with new features and is easier to manage. Codestar is
			building SKG a new reactive platform that scales and is easy to maintain.
			The platform is future-proof thanks to the use of technologies such as
			Microservices, Platform as a Service and Continuous Delivery.
		</Typography>

		<Typography variant="title" gutterBottom>
			About the system
		</Typography>

		<Typography paragraph>
			We are writing the back-end of the system in Scala. The Play! framework
			provides the basis for a scalable platform that can deal with heavy
			traffic loads. Scala is expressive and makes it possible to set up
			detailed data models quickly and simply. This enabled us to write up the
			unique workflows and business rules of SKG Online in an extremely compact,
			readable and low-maintenance manner. That means fewer errors in the
			software and shorter development times. And it was easy to integrate a
			number of recently developed pieces of Java software.
		</Typography>

		<Typography paragraph>
			On the front-end, thanks to TypeScript we were able to achieve the same
			benefits in terms of robustness and development speed. The latest version
			of Angular framework enabled us harness the full power of TypeScript. This
			widely supported framework is future proof. Using reactive programming, we
			can build advanced user interfaces without any compromises on the system
			management front.
		</Typography>

		<Typography paragraph>
			And thanks to continuous delivery and the latest container-technologies,
			we can deliver new functionalities in a streamlined, fast and consistent
			manner. Without any downtime. So SKG will be able to respond quickly to
			any changes in the future.
		</Typography>

		<Typography variant="title" gutterBottom>
			Technology stack
		</Typography>

		<ul>
			<li>Play!</li>
			<li>Slick</li>
			<li>Akka</li>
			<li>Postgres</li>
			<li>Angular 2</li>
			<li>TypeScript</li>
			<li>Docker</li>
			<li>DCOS</li>
			<li>Circle CI</li>
		</ul>
	</article>
);

export default CaseDetailsSKG;
