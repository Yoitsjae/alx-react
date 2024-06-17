import { Map } from 'immutable';
import { SET_LOADING_STATE, FETCH_NOTIFICATIONS_SUCCESS } from '../actions/notificationActionTypes';

const initialState = Map({
  notifications: Map(),
  loading: false,
});

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING_STATE:
      return state.set('loading', action.loading);
    case FETCH_NOTIFICATIONS_SUCCESS:
      return state.set('notifications', state.get('notifications').mergeDeep(action.notifications));
    default:
      return state;
  }
};

export default notificationReducer;
