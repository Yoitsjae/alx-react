import { selectCourse, unSelectCourse } from '../../actions/courseActionCreators';
import { SELECT_COURSE, UNSELECT_COURSE } from '../../actions/courseActionTypes';

describe('selectCourse', () => {
    it('returns correct action for selecting a course', () => {
        expect(selectCourse(1)).toEqual({ type: SELECT_COURSE, index: 1 });
    });
});

describe('unSelectCourse', () => {
    it('returns correct action for unselecting a course', () => {
        expect(unSelectCourse(1)).toEqual({ type: UNSELECT_COURSE, index: 1 });
    });
});
