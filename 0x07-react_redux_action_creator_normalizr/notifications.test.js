import { getAllNotificationsByUser } from '../../schema/notifications';
import * as data from '../../notifications.json';

describe('getAllNotificationsByUser', () => {
    it('returns the correct notifications for a given user ID', () => {
        const expectedNotifications = data.default.filter(notification => notification.author.id === '5debd764a7c57c7839d722e9');
        expect(getAllNotificationsByUser('5debd764a7c57c7839d722e9')).toEqual(expectedNotifications);
    });
});
