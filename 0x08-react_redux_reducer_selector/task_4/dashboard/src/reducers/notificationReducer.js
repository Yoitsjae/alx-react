import { Map } from 'immutable';
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from '../actions/notificationActionTypes';
import { notificationsNormalizer } from '../schema/notifications';
import { normalize } from 'normalizr';

const initialState = Map({
    filter: 'DEFAULT',
    notifications: Map({}),
});

const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_NOTIFICATIONS_SUCCESS:
            return state.merge({
                notifications: state.get('notifications').merge(notificationsNormalizer(action.data)),
            });
        case MARK_AS_READ:
            return state.setIn(['notifications', action.index, 'isRead'], true);
        case SET_TYPE_FILTER:
            return state.set('filter', action.filter);
        default:
            return state;
    }
};

export default notificationReducer;
