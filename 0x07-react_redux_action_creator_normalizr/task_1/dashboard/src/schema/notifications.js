import { normalize, schema } from 'normalizr';
import * as data from '../../notifications.json';

const user = new schema.Entity('users');

const message = new schema.Entity('messages', {}, {
    idAttribute: value => value.guid
});

const notification = new schema.Entity('notifications', {
    author: user,
    context: message
});

const normalizedData = normalize(data.default, [notification]);

export default normalizedData;
