import React from 'react';
import { DetailsSection } from './DetailsSection';
import renderer from 'react-test-renderer';

// Mock for "t", the translate function from react-i18next
const t = () => '';

it('renders the details for the Events header', () => {
	const meetupEvent = {
		name: 'Data Oriented Design with Maxim Zaks',
		link: 'https://www.codestar.nl',
	};
	const formattedDate = '26 september 2018';
	const comp = renderer
		.create(
			<DetailsSection
				t={t}
				mEvent={meetupEvent}
				formattedDate={formattedDate}
				descriptionElem={'descriptionElem'}
			>
				<button />
			</DetailsSection>
		)
		.toJSON();
	expect(comp).toMatchSnapshot();
});
