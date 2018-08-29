import React, { SFC } from 'react';
import { translate, TranslationFunction } from 'react-i18next';
import compose from 'recompose/compose';
import './Heading.css';

interface IHeadingProps {
	type: string;
	text: string;
	t?: TranslationFunction;
}

const Heading: SFC<IHeadingProps> = ({ type, text, t }) => {
	if (type === 'h1') {
		return <h1 className="heading">{t(text)}</h1>;
	} else if (type === 'h2') {
		return <h2 className="heading">{t(text)}</h2>;
	} else if (type === 'h3') {
		return <h3 className="heading">{t(text)}</h3>;
	} else if (type === 'h4') {
		return <h4 className="heading">{t(text)}</h4>;
	}

	return null;
};

export default compose(translate(['events'], { wait: true }))(Heading);
