import addBrowserUpdate from './BrowserUpdateFallback';

const globalAny: any = global;

jest.useFakeTimers();

describe('addBrowserUpdate()', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="fixture"></div>';
  });

  describe('Snaphot', () => {
    it('shows message if Map.prototype.keys not defined', () => {
      const originalMapKeys = globalAny.Map.prototype.keys;
      delete Map.prototype.keys;
      expect(addBrowserUpdate('fixture')).toMatchSnapshot();
      jest.advanceTimersByTime(1000);
      // TODO should not be empty fixture
      expect(document.getElementById('fixture')).toMatchSnapshot();
      globalAny.Map.prototype.keys = originalMapKeys;
    });

    it('does not show message if Map.prototype.keys is defined', () => {
      expect(addBrowserUpdate('fixture')).toMatchSnapshot();
      // TODO should not be empty fixture
      expect(document.getElementById('fixture')).toMatchSnapshot();
    });
  });
});
