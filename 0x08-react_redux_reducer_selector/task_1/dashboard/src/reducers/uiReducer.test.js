import { Map } from 'immutable';
import uiReducer from './uiReducer';
import { DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS } from '../actions/uiActionTypes';

describe('uiReducer', () => {
    it('should return initial state', () => {
        expect(uiReducer(undefined, {})).toEqual(Map({
            isNotificationDrawerVisible: false,
            isUserLoggedIn: false,
            user: Map()
        }));
    });

    it('should handle DISPLAY_NOTIFICATION_DRAWER', () => {
        expect(uiReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER })).toEqual(Map({
            isNotificationDrawerVisible: true,
            isUserLoggedIn: false,
            user: Map()
        }));
    });

    it('should handle HIDE_NOTIFICATION_DRAWER', () => {
        expect(uiReducer(undefined, { type: HIDE_NOTIFICATION_DRAWER })).toEqual(Map({
            isNotificationDrawerVisible: false,
            isUserLoggedIn: false,
            user: Map()
        }));
    });

    it('should handle LOGIN_SUCCESS', () => {
        expect(uiReducer(undefined, { type: LOGIN_SUCCESS })).toEqual(Map({
            isNotificationDrawerVisible: false,
            isUserLoggedIn: true,
            user: Map()
        }));
    });
});
