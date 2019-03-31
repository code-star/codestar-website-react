import { Publications } from './Publications';
import { IPublication } from '../../../publicationsService';
import renderer from "react-test-renderer";
import React from "react";

jest.mock('../PublicationCard/PublicationCard', () => () => "mock-publication-card");

const publications: IPublication[] = [{
  id: '1',
  latestPublishedAt: '100000000',
  author: 'Test Author',
  authorImg: 'foo.png',
  title: 'Test Title',
  paragraphs: ['Test Paragraph'],
  uniqueSlug: 'slug',
  previewImgId: 'preview.png',
}];

describe('<Publications />', () => {
  it('renders publications', () => {
    const comp = renderer
      .create(
        <Publications key={10} publications={publications} />
      )
      .toJSON();
    expect(comp).toMatchSnapshot();
  });
});
