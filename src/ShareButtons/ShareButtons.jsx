import React, { Component } from 'react';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter';
import faLinkedin from '@fortawesome/fontawesome-free-brands/faLinkedin';
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook';

import { Button } from '@material-ui/core';

const socialMedias = {
	twitter: {
		name: 'Twitter',
		icon: faTwitter,
		makeUrl: (link, title, text) =>
			`https://twitter.com/home?status=${encodeURI(`${text}\n${link}`)}`,
	},
	linkedin: {
		name: 'Linkedin',
		icon: faLinkedin,
		makeUrl: (link, title, text) =>
			`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURI(
				link
			)}&title=${encodeURI(title)}&summary=${encodeURI(text)}`,
	},
	facebook: {
		name: 'Facebook',
		icon: faFacebook,
		makeUrl: (link, title, text) =>
			`https://www.facebook.com/sharer/sharer.php?u=${encodeURI(link)}`,
	},
};

class ShareButtons extends Component {
	render() {
		const {
			twitter,
			linkedin,
			facebook,
			color,
			size,
			link,
			title,
			text,
		} = this.props;
		const toRender = [];
		if (twitter) {
			toRender.push(socialMedias.twitter);
		}
		if (linkedin) {
			toRender.push(socialMedias.linkedin);
		}
		if (facebook) {
			toRender.push(socialMedias.facebook);
		}
		return toRender.map((socialMedia, i) => (
			<Button
				key={i}
				color={color}
				size={size}
				component="a"
				target="_blank"
				rel="noopener noreferrer"
				aria-label={socialMedia.name}
				href={socialMedia.makeUrl(link, title, text)}
				style={{
					minWidth: 32,
				}}
			>
				<FontAwesomeIcon icon={socialMedia.icon} size="lg" />
			</Button>
		));
	}
}

export default ShareButtons;
