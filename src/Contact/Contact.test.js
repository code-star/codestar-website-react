import React from 'react'
import ReactDOM from 'react-dom'
import { Contact } from './Contact'
import renderer from 'react-test-renderer'

jest.mock('react-i18next', () => ({
  translate: () => Component => {
    Component.defaultProps = { ...Component.defaultProps, t: () => '' }
    return Component
  },
}))

jest.mock('@material-ui/core/Fade', () => () => <div />)

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Contact />, div)
  ReactDOM.unmountComponentAtNode(div)
})

describe('An instance of Contact', () => {
  let compInstance

  beforeAll(() => {
    global.fetch = require('jest-fetch-mock') // This import should be done in setupJest, but it is not loading
    const comp = renderer.create(<Contact />)
    compInstance = comp.getInstance()
  })

  beforeEach(() => {
    fetch.resetMocks()

    compInstance.setState({
      name: '',
      phone: '',
      email: '',
      message: '',
      messageRequiredError: false,
      showFetchSuccess: false,
      showFetchFailure: false,
      showMap: false,
    })
  })

  it('should have an initial state with all empty fields', () => {
    const comp = renderer.create(<Contact />)
    expect(comp.getInstance().state).toEqual({
      name: '',
      phone: '',
      email: '',
      message: '',
      messageRequiredError: false,
      showFetchFailure: false,
      showFetchSuccess: false,
      showMap: false,
    })
  })

  it('modifies the state on handleChange', () => {
    compInstance.handleChange('name')({
      target: { name: 'name', value: 'MY_TEST_NAME' },
    })
    expect(compInstance.state).toEqual({
      name: 'MY_TEST_NAME',
      phone: '',
      email: '',
      message: '',
      messageRequiredError: false,
      showFetchFailure: false,
      showFetchSuccess: false,
      showMap: false,
    })
  })

  it('calls preventDefault on handleSubmit, error to be set if no message filled in', () => {
    const ev = {
      preventDefault: jest.fn(),
    }
    compInstance.handleSubmit(ev)
    expect(ev.preventDefault).toHaveBeenCalled()
    expect(compInstance.state.messageRequiredError).toBeTruthy()
  })

  it('calls preventDefault on handleSubmit, error to be unset, submit to be called if message is filled in', () => {
    fetch.mockResponseOnce(
      JSON.stringify({
        message: {
          MessageId: '1',
        },
      })
    )
    const ev = {
      preventDefault: jest.fn(),
    }
    compInstance.handleChange('message')({
      target: { name: 'message', value: 'MY_TEST_MESSAGE' },
    })
    compInstance.handleSubmit(ev)
    expect(ev.preventDefault).toHaveBeenCalled()
    expect(compInstance.state.messageRequiredError).toBeFalsy()
  })

  it('sets showFetchSuccess on success', () => {
    fetch.mockResponseOnce(
      JSON.stringify({
        message: {
          MessageId: '1',
        },
      })
    )

    const ev = {
      preventDefault: jest.fn(),
    }
    compInstance.handleChange('message')({
      target: { name: 'message', value: 'MY_TEST_MESSAGE' },
    })
    compInstance.handleSubmit(ev).then(() => {
      expect(compInstance.state.showFetchSuccess).toBeTruthy()
      expect(compInstance.state.showFetchFailure).toBeFalsy()
    })
  })

  it('sets showFetchFailure if no MessageId', async () => {
    fetch.mockResponseOnce(
      JSON.stringify({
        message: {},
      })
    )

    const ev = {
      preventDefault: jest.fn(),
    }
    compInstance.handleChange('message')({
      target: { name: 'message', value: 'MY_TEST_MESSAGE' },
    })

    expect(compInstance.state.showFetchSuccess).toBeFalsy()
    expect(compInstance.state.showFetchFailure).toBeFalsy()
    await compInstance.handleSubmit(ev)
    expect(compInstance.state.showFetchSuccess).toBeFalsy()
    expect(compInstance.state.showFetchFailure).toBeTruthy()
  })

  it('sets showFetchFailure if no MessageId', async () => {
    fetch.mockRejectOnce('error')

    const ev = {
      preventDefault: jest.fn(),
    }
    compInstance.handleChange('message')({
      target: { name: 'message', value: 'MY_TEST_MESSAGE' },
    })

    expect(compInstance.state.showFetchSuccess).toBeFalsy()
    expect(compInstance.state.showFetchFailure).toBeFalsy()
    await compInstance.handleSubmit(ev)
    expect(compInstance.state.showFetchSuccess).toBeFalsy()
    expect(compInstance.state.showFetchFailure).toBeTruthy()
  })
})
