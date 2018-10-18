import addBrowserUpdate from './BrowserUpdateFallback';

const globalAny: any = global;

jest.useFakeTimers();

describe('addBrowserUpdate()', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="dummy-content"></div>';
  });

  describe('Snaphot', () => {
    it('shows message if Map.prototype.keys not defined', () => {
      const originalMapKeys = globalAny.Map.prototype.keys;
      delete Map.prototype.keys;
      expect(addBrowserUpdate('dummy-content')).toMatchSnapshot();
      jest.advanceTimersByTime(1000);
      expect(document.body).toMatchSnapshot();
      globalAny.Map.prototype.keys = originalMapKeys;
    });

    it('does not show message if Map.prototype.keys is defined', () => {
      expect(addBrowserUpdate('dummy-content')).toMatchSnapshot();
      expect(document.body).toMatchSnapshot();
    });
  });
});
