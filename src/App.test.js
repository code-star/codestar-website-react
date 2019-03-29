import React from 'react'
import { shallow, mount } from 'enzyme'

import App from './App'

jest.mock('./ScrollToTop', () => 'scroll-to-top')
jest.mock('./Footer/Footer', () => 'footer')
jest.mock('./Jobs/JobsList', () => {
  return [{ path: 'somePath' }, { path: 'someOtherPath' }]
})
jest.mock('./AsyncComponent/AsyncComponent', () => 'async-component')
jest.mock('./containers/NavContainer/NavContainer', () => 'nav-container')

const renderShallow = () => {
  return shallow(<App />)
}

const renderMount = () => {
  return mount(<App />)
}

describe('<App />', () => {
  let wrapper
  let renderSpy

  beforeEach(() => {
    renderSpy = jest.spyOn(App.prototype, 'render')
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('Component Lifecycle', () => {
    test('must call render', () => {
      wrapper = renderShallow()
      expect(renderSpy).toHaveBeenCalledTimes(1)
    })
  })

  describe('Instance', () => {
    test('must have an instance of App', () => {
      wrapper = renderMount()
      expect(wrapper.find('App')).toHaveLength(1)
    })
  })

  describe('Snaphot', () => {
    test('default', () => {
      expect(global.renderToJSON(renderShallow())).toMatchSnapshot()
    })
  })
})
