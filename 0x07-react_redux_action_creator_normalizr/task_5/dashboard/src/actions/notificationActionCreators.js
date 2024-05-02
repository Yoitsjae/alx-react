import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';

const markAsRead = (index) => ({
    type: MARK_AS_READ,
    index
});

const setNotificationFilter = (filter) => ({
    type: SET_TYPE_FILTER,
    filter
});

export { markAsRead, setNotificationFilter };
