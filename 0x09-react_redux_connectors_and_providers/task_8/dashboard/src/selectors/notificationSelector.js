import { createSelector } from 'reselect';

const getNotifications = (state) => state.get('notifications');
const getFilter = (state) => state.get('filter');

export const getUnreadNotificationsByType = createSelector(
  [getNotifications, getFilter],
  (notifications, filter) => {
    const unreadNotifications = notifications.filter((notif) => !notif.get('read'));
    if (filter === 'URGENT') {
      return unreadNotifications.filter((notif) => notif.get('type') === 'urgent');
    }
    return unreadNotifications;
  }
);
