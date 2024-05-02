import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';

const markAsRead = (index) => ({
    type: MARK_AS_READ,
    index
});

const setNotificationFilter = (filter) => ({
    type: SET_TYPE_FILTER,
    filter
});

const boundMarkAsRead = (index) => dispatch => dispatch(markAsRead(index));
const boundSetNotificationFilter = (filter) => dispatch => dispatch(setNotificationFilter(filter));

export { boundMarkAsRead, boundSetNotificationFilter };
