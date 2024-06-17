import uiReducer from './uiReducer';
import { LOGIN, LOGOUT } from '../actions/uiActionTypes';
import { fromJS } from 'immutable';

describe('uiReducer', () => {
  it('should return the initial state', () => {
    const initialState = fromJS({
      isUserLoggedIn: false,
      user: null,
    });
    expect(uiReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle LOGIN', () => {
    const loginAction = {
      type: LOGIN,
      user: { name: 'User' },
    };
    const expectedState = fromJS({
      isUserLoggedIn: true,
      user: { name: 'User' },
    });
    expect(uiReducer(undefined, loginAction)).toEqual(expectedState);
  });

  it('should handle LOGOUT', () => {
    const logoutAction = { type: LOGOUT };
    const expectedState = fromJS({
      isUserLoggedIn: false,
      user: null,
    });
    expect(uiReducer(undefined, logoutAction)).toEqual(expectedState);
  });
});
