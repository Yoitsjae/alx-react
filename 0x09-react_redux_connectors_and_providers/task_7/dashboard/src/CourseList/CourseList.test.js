import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';

describe('CourseList component', () => {
  it('should call fetchCourses when the component is mounted', () => {
    const fetchCoursesMock = jest.fn();
    shallow(<CourseList fetchCourses={fetchCoursesMock} listCourses={[]} />);
    expect(fetchCoursesMock).toHaveBeenCalled();
  });

  it('should dispatch the correct actions when onChangeRow is called', () => {
    const selectCourseMock = jest.fn();
    const unSelectCourseMock = jest.fn();
    const wrapper = shallow(<CourseList selectCourse={selectCourseMock} unSelectCourse={unSelectCourseMock} listCourses={[]} />);

    wrapper.instance().onChangeRow('1', true);
    expect(selectCourseMock).toHaveBeenCalledWith('1');

    wrapper.instance().onChangeRow('1', false);
    expect(unSelectCourseMock).toHaveBeenCalledWith('1');
  });
});
