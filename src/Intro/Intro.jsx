import React from 'react';

import styles from './Intro.module.css';
import { Link } from 'react-router-dom';
import Container from '../Container/Container';
import Clients from '../Clients/Clients';

const Intro = () => (
	<div>
		<section id="intro" className={styles.backgroundVideoWrapper}>
			<video autoPlay muted loop className={styles.fullVideo}>
				<source src="/2719001.mp4" type="video/mp4" />
			</video>
			<Container fullHeightMinusNavBar center>
				<div className="row justify-content-center">
					<div className="col-8 col-md-6 col-lg-4">
						<img
							src="/images/logo-codestar-by-ordina.svg"
							alt="Codestar powered by Ordina Logo"
							className="mb-3"
						/>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-12 col-md-9">
						<div className="bg-white">
							<p className={styles.p}>
								The digital world offers endless possibilities. The challenges
								are often complex. We develop state-of-the-art software that’s
								simple to use. Agile and productive, using the latest
								techniques. We program with our hearts and with our minds, for
								organisations looking to take the next step.
							</p>
							<p className={styles.p}>
								We are the #1 partner for Full Stack Scala and Big Data
								solutions in the Netherlands. We are Codestar.
							</p>

							<p className={styles.p}>
								<Link to="/cases">Go to cases</Link>
							</p>
						</div>
					</div>
				</div>
			</Container>
		</section>
		<section id="next-step" className="my-3">
			<Container>
				<div className="row">
					<div className="col-12 col-md-6">
						<h3>TIME TO TAKE THE NEXT STEP</h3>
						<p>
							Now more than ever, IT is the carrier, deliverer and enricher of
							your business. You will quickly fall behind without an outstanding
							digital infrastructure. With data in abundance, where do you
							start? In the past, if someone asked you for water, you grabbed a
							bucket and went to the well. Today, we’re dealing with a waterfall
							of data. Good luck with your bucket. Fortunately, the growth in
							the amount of data has coincided with the development of
							technologies to work with that data. The modern internet, mobile
							phone use and the ‘Internet of Things’ demands more. At, we use
							Scala, Front-end and BigData technologies to create
							state-of-the-art software which enables you to confront challenges
							head on. Whether you need a bigger bucket, more buckets or just a
							decent pipeline, we can create it for you.
						</p>
					</div>
					<div className="col-12 col-md-6">
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
							neque, vel adipisci exercitationem numquam unde commodi esse ipsum
							necessitatibus, consectetur fuga nihil ducimus dolor ipsa beatae
							veniam tempora sequi. Exercitationem!{' '}
						</p>
					</div>
				</div>
				<Clients />
			</Container>
		</section>
	</div>
);
export default Intro;
