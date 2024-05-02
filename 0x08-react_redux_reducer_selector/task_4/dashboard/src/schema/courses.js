import { schema } from 'normalizr';

export const courseSchema = new schema.Entity('courses');

export const coursesNormalizer = data => {
    const normalizedData = normalize(data, [courseSchema]);
    return normalizedData.entities.courses || {};
};
