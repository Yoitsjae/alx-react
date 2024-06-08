import uiReducer from './uiReducer';
import { DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS } from '../actions/uiActionTypes';

describe('uiReducer', () => {
    it('this should return initial state', () => {
        expect(uiReducer(undefined, {})).toEqual({
            isNotificationDrawerVisible: false,
            isUserLoggedIn: false,
            user: {}
        });
    });

    it('should handle DISPLAY_NOTIFICATION_DRAWER', () => {
        expect(uiReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER })).toEqual({
            isNotificationDrawerVisible: true,
            isUserLoggedIn: false,
            user: {}
        });
    });

    it('should handle HIDE_NOTIFICATION_DRAWER', () => {
        expect(uiReducer(undefined, { type: HIDE_NOTIFICATION_DRAWER })).toEqual({
            isNotificationDrawerVisible: false,
            isUserLoggedIn: false,
            user: {}
        });
    });

    it('should handle LOGIN_SUCCESS', () => {
        expect(uiReducer(undefined, { type: LOGIN_SUCCESS })).toEqual({
            isNotificationDrawerVisible: false,
            isUserLoggedIn: true,
            user: {}
        });
    });
});
