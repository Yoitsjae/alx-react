import { SET_COURSES } from './courseActionTypes';

export const setCourses = (courses) => ({
  type: SET_COURSES,
  courses,
});

export const fetchCourses = () => {
  return (dispatch) => {
    fetch('/courses.json')
      .then((response) => response.json())
      .then((data) => {
        dispatch(setCourses(data));
      });
  };
};
