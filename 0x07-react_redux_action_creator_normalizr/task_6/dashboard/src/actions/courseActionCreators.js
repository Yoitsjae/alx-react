import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

const selectCourse = (index) => ({
    type: SELECT_COURSE,
    index
});

const unSelectCourse = (index) => ({
    type: UNSELECT_COURSE,
    index
});

const boundSelectCourse = (index) => dispatch => dispatch(selectCourse(index));
const boundUnSelectCourse = (index) => dispatch => dispatch(unSelectCourse(index));

export { boundSelectCourse, boundUnSelectCourse };
