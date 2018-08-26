import React from 'react';
import { HeaderContent } from './HeaderContent';
import renderer from 'react-test-renderer';

const t = () => '';

it('renders the content of the Events header', () => {
	const meetupEvent = {
		name: 'Data Oriented Design with Maxim Zaks',
		link: 'https://www.codestar.nl',
	};
	const formattedDate = '26 september 2018';
	const comp = renderer
		.create(
			<HeaderContent
				t={t}
				classes={{}}
				mEvent={meetupEvent}
				formattedDate={formattedDate}
			>
				<button />
			</HeaderContent>
		)
		.toJSON();
	expect(comp).toMatchSnapshot();
});
