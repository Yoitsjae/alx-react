import { Map } from 'immutable';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';

const initialState = Map({
    courses: [],
});

const courseReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COURSE_SUCCESS:
            return state.set('courses', action.data.map(course => ({ ...course, isSelected: false })));
        case SELECT_COURSE:
            return state.update('courses', courses => courses.map(course =>
                course.id === action.index ? { ...course, isSelected: true } : course
            ));
        case UNSELECT_COURSE:
            return state.update('courses', courses => courses.map(course =>
                course.id === action.index ? { ...course, isSelected: false } : course
            ));
        default:
            return state;
    }
};

export default courseReducer;
