import { markAsRead, setNotificationFilter } from '../../actions/notificationActionCreators';
import { MARK_AS_READ, SET_TYPE_FILTER } from '../../actions/notificationActionTypes';

describe('markAsRead', () => {
    it('returns correct action for marking notification as read', () => {
        expect(markAsRead(1)).toEqual({ type: MARK_AS_READ, index: 1 });
    });
});

describe('setNotificationFilter', () => {
    it('returns correct action for setting notification filter', () => {
        expect(setNotificationFilter('DEFAULT')).toEqual({ type: SET_TYPE_FILTER, filter: 'DEFAULT' });
    });
});
