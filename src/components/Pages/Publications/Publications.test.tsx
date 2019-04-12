import React from "react";
import {PublicationsPage} from './Publications';
import renderer from "react-test-renderer";

// Mock for "t", the translate function from react-i18next
const t = (text:string | string[]) => text;

jest.mock('@material-ui/core/Fade', () => "mock-fade");
jest.mock('@material-ui/core/Slide', () => "mock-slide");
jest.mock('../../Molecules/Publications/Publications', () => "mock-publications");

describe('<PublicationsPage />', () => {
  it('renders the publication page', () => {
    const comp = renderer
      .create(
        <PublicationsPage key={1} classes={{}} t={t} />
      )
      .toJSON();
    expect(comp).toMatchSnapshot();
  });
});
