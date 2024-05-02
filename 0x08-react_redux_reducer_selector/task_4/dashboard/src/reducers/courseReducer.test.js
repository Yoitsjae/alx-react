import { Map } from 'immutable';
import courseReducer from './courseReducer';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';

describe('courseReducer', () => {
    it('should return initial state', () => {
        expect(courseReducer(undefined, {})).toEqual(Map({ courses: Map({}) }));
    });

    it('should handle FETCH_COURSE_SUCCESS', () => {
        const action = {
            type: FETCH_COURSE_SUCCESS,
            data: [
                { id: 1, name: 'ES6', credit: 60 },
                { id: 2, name: 'Webpack', credit: 20 },
                { id: 3, name: 'React', credit: 40 }
            ]
        };
        expect(courseReducer(undefined, action)).toEqual(Map({
            courses: Map({
                1: { id: 1, name: 'ES6', credit: 60 },
                2: { id: 2, name: 'Webpack', credit: 20 },
                3: { id: 3, name: 'React', credit: 40 }
            })
        }));
    });

    // Additional test cases for SELECT_COURSE and UNSELECT_COURSE can be added here
});
