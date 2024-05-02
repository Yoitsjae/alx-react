import { schema } from 'normalizr';

export const notificationSchema = new schema.Entity('notifications');

export const notificationsNormalizer = data => {
    const normalizedData = normalize(data, [notificationSchema]);
    return normalizedData.entities.notifications || {};
};
