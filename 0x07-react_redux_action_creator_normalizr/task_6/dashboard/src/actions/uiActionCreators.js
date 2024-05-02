import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';

const login = (email, password) => ({
    type: LOGIN,
    user: { email, password }
});

const logout = () => ({
    type: LOGOUT
});

const displayNotificationDrawer = () => ({
    type: DISPLAY_NOTIFICATION_DRAWER
});

const hideNotificationDrawer = () => ({
    type: HIDE_NOTIFICATION_DRAWER
});

const boundLogin = (email, password) => dispatch => dispatch(login(email, password));
const boundLogout = () => dispatch => dispatch(logout);
const boundDisplayNotificationDrawer = () => dispatch => dispatch(displayNotificationDrawer);
const boundHideNotificationDrawer = () => dispatch => dispatch(hideNotificationDrawer);

export { boundLogin, boundLogout, boundDisplayNotificationDrawer, boundHideNotificationDrawer };
