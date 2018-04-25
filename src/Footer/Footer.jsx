import React from 'react';
import Container from '../Container/Container';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter';
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub';
import faMediumM from '@fortawesome/fontawesome-free-brands/faMediumM';
import faLinkedin from '@fortawesome/fontawesome-free-brands/faLinkedin';
import faYoutube from '@fortawesome/fontawesome-free-brands/faYoutube';
import faMeetup from '@fortawesome/fontawesome-free-brands/faMeetup';

import compose from 'recompose/compose';
import { withStyles } from 'material-ui/styles';
import withWidth from 'material-ui/utils/withWidth';

const styles = theme => ({
	halfHeightMinusHalfNavBar: {
		minHeight: 'calc(50vh - 28px)',
		[theme.breakpoints.up('sm')]: {
			minHeight: 'calc(50vh - 32px)',
		},
	},
});

const Footer = props => (
	<footer>
		<Container fluid>
			<div className="row bg-dark">
				<div className={`col-12 col-sm-6 mt-auto pt-3`}>
					<p>
						<a href="mailto:codestar@ordina.nl" className="text-white">
							codestar@ordina.nl
						</a>{' '}
						<br />
						<a href="tel:+31306637000" className="text-white">
							+31 30 6637000
						</a>{' '}
						<br />
						<a
							href="https://maps.google.com/maps?ll=52.057652,5.111462&z=16&t=m&hl=en-GB&gl=NL&mapclient=embed&cid=15918536717636328792"
							target="_blank"
							rel="noopener noreferrer"
							className="text-white"
						>
							Ringwade 1, 3439 LM Nieuwegein
						</a>
					</p>
					<p>
						<a href="https://twitter.com/code_star_nl" className="text-white">
							<FontAwesomeIcon icon={faTwitter} size="3x" className="px-2" />
						</a>
						<a href="https://github.com/code-star" className="text-white">
							<FontAwesomeIcon icon={faGithub} size="3x" className="px-2" />
						</a>
						<a href="" className="text-white">
							<FontAwesomeIcon icon={faMediumM} size="3x" className="px-2" />
						</a>
						<a href="" className="text-white">
							<FontAwesomeIcon icon={faLinkedin} size="3x" className="px-2" />
						</a>
						<a href="" className="text-white">
							<FontAwesomeIcon icon={faYoutube} size="3x" className="px-2" />
						</a>
						<a
							href="https://www.meetup.com/Code-Star-Night"
							className="text-white"
						>
							<FontAwesomeIcon icon={faMeetup} size="3x" className="px-2" />
						</a>
					</p>
				</div>
				<div className="col-12 col-sm-6 p-0">
					<iframe
						className={props.classes.halfHeightMinusHalfNavBar}
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2453.212619226339!2d5.109273615790301!3d52.057652079729266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c665c3d22bd00b%3A0xdcea00cdfeb9dd58!2sCodestar!5e0!3m2!1sen!2snl!4v1519930704938"
						width="100%"
						frameBorder="0"
						style={{
							border: 0,
							display: 'block',
						}}
						allowFullScreen
						title="Map"
					/>
				</div>
			</div>
		</Container>
	</footer>
);

export default compose(withStyles(styles), withWidth())(Footer);
