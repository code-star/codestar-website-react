import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';
import renderer from 'react-test-renderer';

Enzyme.configure({ adapter: new Adapter() });

jest.mock(
  '@material-ui/core/styles/createGenerateClassName',
  () => () => (rule: any, styleSheet: any) => `${styleSheet.options.name}-${rule.key}`
);

const renderToJSON = (component: any) => {
  return renderer.create(component).toJSON();
};

export default renderToJSON;
