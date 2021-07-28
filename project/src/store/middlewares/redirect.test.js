import { redirect } from './redirect';
import { redirectToRoute } from '../action';
import { AppRoutes } from '../../consts';

const mockRedux = () => {
  const store = {
    getState: jest.fn(() => ({})),
    dispatch: jest.fn(),
  };

  const next = jest.fn();
  const invoke = (action) => redirect(store)(next)(action);
  return {store, next, invoke};
};

describe('Middleware: redirect', () => {
  it('action should pass to the next middleware', () => {
    const {invoke, next} = mockRedux();
    const action = redirectToRoute(AppRoutes.ROOT);
    invoke(action);
    expect(next).toHaveBeenCalledWith(action);
  });

  const fakeHistory = {
    location: {pathname: ''},
    push(path) {
      this.location.pathname = path;
    },
  };

  jest.mock('../../browser-history', () => fakeHistory);

  it('route should be added to fakeHistory', () => {
    expect(redirectToRoute(AppRoutes.LOGIN).payload).toBe(AppRoutes.LOGIN);
    expect(redirectToRoute(AppRoutes.MYLIST).payload).toBe(AppRoutes.MYLIST);
  });

  it('should not redirect because bad action', () => {
    const url = '/test-url';
    const {invoke} = mockRedux();
    invoke({type: 'TEST_ACTION', payload: url});
    expect(fakeHistory.location.pathname).not.toBe(url);
  });
});
