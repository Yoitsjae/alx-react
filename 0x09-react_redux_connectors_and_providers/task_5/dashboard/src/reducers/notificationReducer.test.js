import notificationReducer from './notificationReducer';
import { SET_LOADING_STATE, FETCH_NOTIFICATIONS_SUCCESS } from '../actions/notificationActionTypes';
import { fromJS } from 'immutable';

describe('notificationReducer', () => {
  it('should return the initial state', () => {
    const initialState = fromJS({
      notifications: {},
      loading: false,
    });
    expect(notificationReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle SET_LOADING_STATE', () => {
    const action = {
      type: SET_LOADING_STATE,
      loading: true,
    };
    const expectedState = fromJS({
      notifications: {},
      loading: true,
    });
    expect(notificationReducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle FETCH_NOTIFICATIONS_SUCCESS', () => {
    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      notifications: { 1: 'Notification 1' },
    };
    const expectedState = fromJS({
      notifications: { 1: 'Notification 1' },
      loading: false,
    });
    expect(notificationReducer(undefined, action)).toEqual(expectedState);
  });
});
