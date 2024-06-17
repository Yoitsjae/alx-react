import { setCourses, fetchCourses } from './courseActionCreators';
import { SET_COURSES } from './courseActionTypes';

describe('courseActionCreators', () => {
  it('setCourses should create the correct action', () => {
    const courses = { 1: 'Course 1' };
    const expectedAction = { type: SET_COURSES, courses };
    expect(setCourses(courses)).toEqual(expectedAction);
  });

  it('fetchCourses should dispatch the correct actions', () => {
    const dispatch = jest.fn();
    fetchCourses()(dispatch);
    expect(dispatch).toHaveBeenCalled();
  });
});
