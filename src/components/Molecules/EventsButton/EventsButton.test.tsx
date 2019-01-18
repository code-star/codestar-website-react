import React from 'react';
import ReactDOM from 'react-dom';
import { EventsButton, initialState, stateUpdaters } from './EventsButton';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

jest.mock('../../../i18n', () => ({
  language: 'nl',
}));

const handleMouseOut = () => '';
const handleMouseOver = () => '';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <EventsButton
        label="TEST_EVENTS_LABEL"
        classes={{ newEventIcon: '' }}
        nextEvent={null}
        isHovering={false}
        handleMouseOut={handleMouseOut}
        handleMouseOver={handleMouseOver}
      />
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

describe('An instance of EventsButton', () => {
  it('matches the snapshot without Event', () => {
    const testRenderer = renderer.create(
      <MemoryRouter>
        <EventsButton
          classes={{ newEventIcon: '' }}
          label="TEST_EVENTS_LABEL_2"
          nextEvent={null}
          isHovering={false}
          handleMouseOut={handleMouseOut}
          handleMouseOver={handleMouseOver}
        />
      </MemoryRouter>
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('matches the snapshot while hovering', () => {
    const testRenderer = renderer.create(
      <MemoryRouter>
        <EventsButton
          classes={{ newEventIcon: '' }}
          label="TEST_EVENTS_LABEL_2"
          nextEvent={null}
          isHovering={true}
          handleMouseOut={handleMouseOut}
          handleMouseOver={handleMouseOver}
        />
      </MemoryRouter>
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('matches the snapshot with Event', () => {
    const testRenderer = renderer.create(
      <MemoryRouter>
        <EventsButton
          classes={{ newEventIcon: '' }}
          label="TEST_EVENTS_LABEL_2"
          nextEvent={{ name: 'MyEvent', time: 1535391830804 }}
          isHovering={false}
          handleMouseOut={handleMouseOut}
          handleMouseOver={handleMouseOver}
        />
      </MemoryRouter>
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  // TODO improvement would be to test if the DOM mouseOver of CustomButton triggers the (mocked) function handleMouseOver

  it('has an initial hover state', () => {
    expect(initialState).toEqual({
      isHovering: false,
    });
  });

  it('sets hover state', () => {
    expect(stateUpdaters.handleMouseOver()()).toEqual({
      isHovering: true,
    });
  });

  it('unsets hover state', () => {
    expect(stateUpdaters.handleMouseOut()()).toEqual({
      isHovering: false,
    });
  });
});
