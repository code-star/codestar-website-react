import React from 'react';
import Container from '../Container/Container';
import Map from '../Map/Map';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter';
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub';
import faMediumM from '@fortawesome/fontawesome-free-brands/faMediumM';
import faLinkedin from '@fortawesome/fontawesome-free-brands/faLinkedin';
import faYoutube from '@fortawesome/fontawesome-free-brands/faYoutube';
import faMeetup from '@fortawesome/fontawesome-free-brands/faMeetup';

import { withRouter } from 'react-router-dom';

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
            <a
              href="https://twitter.com/codestar_nl"
              className="text-white"
              aria-label="Twitter"
            >
              <FontAwesomeIcon icon={faTwitter} size="3x" className="px-2" />
            </a>
            <a
              href="https://github.com/code-star"
              className="text-white"
              aria-label="Github"
            >
              <FontAwesomeIcon icon={faGithub} size="3x" className="px-2" />
            </a>
            <a
              href="https://medium.com/codestar-blog"
              className="text-white"
              aria-label="Medium"
            >
              <FontAwesomeIcon icon={faMediumM} size="3x" className="px-2" />
            </a>
            <a
              href="https://www.linkedin.com/company/codestar-powered-by-ordina/"
              className="text-white"
              aria-label="Linkedin"
            >
              <FontAwesomeIcon icon={faLinkedin} size="3x" className="px-2" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCqwHhJNEUe7D-HGsX4zvKzQ"
              className="text-white"
              aria-label="Youtube"
            >
              <FontAwesomeIcon icon={faYoutube} size="3x" className="px-2" />
            </a>
            <a
              href="https://www.meetup.com/Code-Star-Night"
              className="text-white"
              aria-label="Meetup.com"
            >
              <FontAwesomeIcon icon={faMeetup} size="3x" className="px-2" />
            </a>
          </p>
        </div>

        <div className="col-12 col-sm-6 p-0">
          {props.location.pathname !== '/contact' && (
            <Map halfHeightMinusHalfNavBar />
          )}
        </div>
      </div>
    </Container>
  </footer>
);

export default withRouter(Footer);
