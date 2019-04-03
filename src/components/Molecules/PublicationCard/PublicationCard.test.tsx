import { PublicationCard } from './PublicationCard';
import { IPublication } from '../../../publicationsService';
import renderer from "react-test-renderer";
import React from "react";

// Mock for "t", the translate function from react-i18next
const t = () => '';

const publication: IPublication = {
  id: '1',
  latestPublishedAt: '100000000',
  author: 'Test Author',
  authorImg: 'foo.png',
  title: 'Test Title',
  paragraphs: ['Test Paragraph'],
  uniqueSlug: 'slug',
  previewImgId: 'preview.png',
};

describe('<PublicationCard />', () => {
  it('renders a publication', () => {
    const comp = renderer
      .create(
        <PublicationCard key={1} classes={{}} t={t} publication={publication} />
      )
      .toJSON();
    expect(comp).toMatchSnapshot();
  });
});
