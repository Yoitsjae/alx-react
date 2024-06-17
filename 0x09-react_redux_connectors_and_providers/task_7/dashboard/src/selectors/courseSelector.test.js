import { getListCourses } from './courseSelector';
import { fromJS } from 'immutable';

describe('courseSelector', () => {
  it('should return a list of courses', () => {
    const state = fromJS({
      courses: { 1: 'Course 1', 2: 'Course 2' },
    });
    const expected = fromJS(['Course 1', 'Course 2']);
    expect(getListCourses(state)).toEqual(expected);
  });
});
