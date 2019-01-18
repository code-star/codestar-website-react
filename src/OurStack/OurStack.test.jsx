import React from 'react';
import { OurStack } from './OurStack';
import renderer from 'react-test-renderer';

jest.mock('@material-ui/core/Grow', () => Component => (
  <div>{Component.children}</div>
));

describe('OurStack', () => {
  it('shows icons for each technology', () => {
    const comp = renderer
      .create(<OurStack classes={{ root: '' }} t={() => ''} />)
      .toJSON();
    expect(comp).toMatchSnapshot();
  });
});
