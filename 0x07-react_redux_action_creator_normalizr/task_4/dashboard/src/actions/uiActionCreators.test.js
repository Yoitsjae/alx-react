import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from '../../actions/uiActionCreators';
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from '../../actions/uiActionTypes';

describe('login', () => {
    it('returns correct action for login', () => {
        expect(login('user@example.com', 'password123')).toEqual({ type: LOGIN, user: { email: 'user@example.com', password: 'password123' } });
    });
});

describe('logout', () => {
    it('returns correct action for logout', () => {
        expect(logout()).toEqual({ type: LOGOUT });
    });
});

describe('displayNotificationDrawer', () => {
    it('returns correct action for displaying notification drawer', () => {
        expect(displayNotificationDrawer()).toEqual({ type: DISPLAY_NOTIFICATION_DRAWER });
    });
});

describe('hideNotificationDrawer', () => {
    it('returns correct action for hiding notification drawer', () => {
        expect(hideNotificationDrawer()).toEqual({ type: HIDE_NOTIFICATION_DRAWER });
    });
});
