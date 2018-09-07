import 'jest-enzyme';
import renderer from 'react-test-renderer';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

global.renderToJSON = component => {
  return renderer.create(component).toJSON();
};
