import React from 'react';
import renderer from 'react-test-renderer';
import { DetailsSection } from './DetailsSection';
import { IMeetupEvent } from '../../../containers/EventsContainer/EventsContainer.interfaces';

// Mock for "t", the translate function from react-i18next
const t = (text: string | string[]) => text;

it('renders the details for the Events header', () => {
  const meetupEvent: IMeetupEvent = {
    coverUrl: 'foo.png',
    link: 'https://www.codestar.nl',
    name: 'Data Oriented Design with Maxim Zaks',
    time: 123,
    withDescription: false,
  };
  const formattedDate = '26 september 2018';
  const comp = renderer
    .create(
      <DetailsSection
        t={t}
        mEvent={meetupEvent}
        formattedDate={formattedDate}
        descriptionElem={'descriptionElem'}
        tweets={[]}
      >
        <button />
      </DetailsSection>
    )
    .toJSON();
  expect(comp).toMatchSnapshot();
});
