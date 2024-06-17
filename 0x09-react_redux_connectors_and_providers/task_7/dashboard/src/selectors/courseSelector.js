import { createSelector } from 'reselect';

const getCourses = (state) => state.get('courses');

export const getListCourses = createSelector(
  [getCourses],
  (courses) => courses.valueSeq().toList()
);
