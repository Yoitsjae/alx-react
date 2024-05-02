import { Map } from 'immutable';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';
import { coursesNormalizer } from '../schema/courses';
import { normalize } from 'normalizr';

const initialState = Map({
    courses: Map({}),
});

const courseReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COURSE_SUCCESS:
            return state.set('courses', state.get('courses').merge(coursesNormalizer(action.data)));
        case SELECT_COURSE:
            return state.setIn(['courses', action.index, 'isSelected'], true);
        case UNSELECT_COURSE:
            return state.setIn(['courses', action.index, 'isSelected'], false);
        default:
            return state;
    }
};

export default courseReducer;
