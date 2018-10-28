// import React from 'react';
// import { shallow } from 'enzyme';
// import TrainingsSection from './TrainingsSection';
// import {MemoryRouter} from 'react-router';
//
// jest.mock('react-i18next', () => ({
//   translate: () => (Component:any) => {
//     Component.defaultProps = { ...Component.defaultProps, t: () => '' };
//     return Component;
//   },
// }));
//
// jest.mock('react-router-dom/Link', () => 'Link');
//
// const globalAny: any = global;
//
// // jest.mock('./ScrollToTop', () => 'ScrollToTop');
// // jest.mock('./Footer/Footer', () => 'Footer');
// // jest.mock('./Jobs/JobsList', () => {
// //   return [{ path: 'somePath' }, { path: 'someOtherPath' }];
// // });
// // jest.mock('./AsyncComponent/AsyncComponent', () => 'AsyncComponent');
// // jest.mock('./modules/NavContainer/NavContainer', () => 'NavContainer');
//
// const renderShallow = () => {
//   return shallow(<MemoryRouter><TrainingsSection scrollname="trainings" /></MemoryRouter>);
// };
//
// // const renderMount = () => {
// //   return mount(<App />);
// // };
//
// describe('<TrainingsSection />', () => {
//   let wrapper;
//
//   describe('Instance', () => {
//     test('must be an instance of TrainingsSection', () => {
//       wrapper = renderShallow();
//       expect(wrapper.find('TrainingsSection')).toHaveLength(1);
//     });
//   });
//
//   describe('Snaphot', () => {
//     test('must match the static training section', () => {
//       expect(globalAny.renderToJSON(renderShallow())).toMatchSnapshot();
//     });
//   });
// });
//
//
//
// // const globalAny: any = global;
// //
// // const renderShallow = () => {
// //   return shallow(<BrowserUpdate />);
// // };
// //
// // describe('<BrowserUpdate />', () => {
// //   describe('Snaphot', () => {
// //     it('shows message if Map.prototype.keys not defined', () => {
// //       const originalMapKeys = globalAny.Map.prototype.keys;
// //       delete Map.prototype.keys;
// //       expect(globalAny.renderToJSON(renderShallow())).toMatchSnapshot();
// //       globalAny.Map.prototype.keys = originalMapKeys;
// //     });
// //
// //     it('does not show message if Map.prototype.keys is defined', () => {
// //       expect(globalAny.renderToJSON(renderShallow())).toMatchSnapshot();
// //     });
// //   });
// // });
//
