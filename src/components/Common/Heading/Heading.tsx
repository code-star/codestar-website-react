import React from 'react';
import { translate } from '../../../typed-translate';
import './Heading.css';

interface IProps {
	type: string;
	text: string;
	t?: any;
}

@translate(['events'], { wait: true })
class Heading extends React.Component<IProps> {
	public render() {
		const { type, text, t } = this.props;

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
	}
}

export default Heading;
