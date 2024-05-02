import { Map } from 'immutable';
import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';

describe('notificationSelector', () => {
    const initialState = Map({
        filter: 'DEFAULT',
        notifications: Map({
            1: { id: 1, isRead: false, type: 'default', value: 'New course available' },
            2: { id: 2, isRead: false, type: 'urgent', value: 'New resume available' },
            3: { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
        })
    });

    it('should select filter type', () => {
        expect(filterTypeSelected(initialState)).toEqual('DEFAULT');
    });

    it('should select notifications', () => {
        const expectedNotifications = Map({
            1: { id: 1, isRead: false, type: 'default', value: 'New course available' },
            2: { id: 2, isRead: false, type: 'urgent', value: 'New resume available' },
            3: { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
        });
        expect(getNotifications(initialState)).toEqual(expectedNotifications);
    });

    it('should select unread notifications', () => {
        const expectedUnreadNotifications = Map({
            1: { id: 1, isRead: false, type: 'default', value: 'New course available' },
            2: { id: 2, isRead: false, type: 'urgent', value: 'New resume available' },
            3: { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
        });
        expect(getUnreadNotifications(initialState)).toEqual(expectedUnreadNotifications);
    });
});
