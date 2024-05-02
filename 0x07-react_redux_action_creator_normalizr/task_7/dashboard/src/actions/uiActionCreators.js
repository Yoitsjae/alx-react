import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';

const login = (email, password) => ({
    type: LOGIN,
    user: { email, password }
});

const loginSuccess = () => ({
    type: LOGIN_SUCCESS
});

const loginFailure = () => ({
    type: LOGIN_FAILURE
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

const boundLogin = (email, password) => dispatch => {
    dispatch(login(email, password));
    fetch('/login-success.json')
        .then(response => {
            if (response.ok) {
                dispatch(loginSuccess());
            } else {
                dispatch(loginFailure());
            }
        })
        .catch(error => dispatch(loginFailure()));
};

const boundLogout = () => dispatch => dispatch(logout);
const boundDisplayNotificationDrawer = () => dispatch => dispatch(displayNotificationDrawer);
const boundHideNotificationDrawer = () => dispatch => dispatch(hideNotificationDrawer);

export { boundLogin, boundLogout, boundDisplayNotificationDrawer, boundHideNotificationDrawer };
