// File: task_0/dashboard/src/CourseList/CourseListRow.test.js

import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('CourseListRow', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<CourseListRow />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders header row with colspan=2 when textSecondCell is present', () => {
    const wrapper = shallow(
      <CourseListRow isHeader textFirstCell="Course name" textSecondCell="Credit" />
    );
    expect(wrapper.find('th').prop('colSpan')).toEqual('2');
  });

  it('renders two td elements when textSecondCell is present', () => {
    const wrapper = shallow(
      <CourseListRow textFirstCell="ES6" textSecondCell="60" />
    );
    expect(wrapper.find('td').length).toEqual(2);
  });
});
