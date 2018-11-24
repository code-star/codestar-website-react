import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';
import renderer from 'react-test-renderer';

Enzyme.configure({ adapter: new Adapter() });

const globalAny: any = global;
globalAny.renderToJSON = (component: any) => {
  return renderer.create(component).toJSON();
};
