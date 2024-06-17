import { getUnreadNotificationsByType } from './notificationSelector';
import { fromJS } from 'immutable';

describe('notificationSelector', () => {
  it('should return unread urgent notifications when the filter is set to URGENT', () => {
    const state = fromJS({
      notifications: { 1: { type: 'urgent', read: false }, 2: { type: 'default', read: false } },
      filter: 'URGENT',
    });
    const expected = fromJS([{ type: 'urgent', read: false }]);
    expect(getUnreadNotificationsByType(state)).toEqual(expected);
  });

  it('should return all unread notifications when the filter is set to DEFAULT', () => {
    const state = fromJS({
      notifications: { 1: { type: 'urgent', read: false }, 2: { type: 'default', read: false } },
      filter: 'DEFAULT',
    });
    const expected = fromJS([{ type: 'urgent', read: false }, { type: 'default', read: false }]);
    expect(getUnreadNotificationsByType(state)).toEqual(expected);
  });
});
