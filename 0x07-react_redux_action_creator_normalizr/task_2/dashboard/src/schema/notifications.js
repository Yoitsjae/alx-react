import normalizedData from './notifications';

const getAllNotificationsByUser = (userId) => {
    const notifications = normalizedData.result.map(notificationId => normalizedData.entities.notifications[notificationId]);
    return notifications.filter(notification => notification.author === userId);
}

export { getAllNotificationsByUser };
