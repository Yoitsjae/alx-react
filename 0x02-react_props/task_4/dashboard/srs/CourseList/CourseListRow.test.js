// task_4/dashboard/src/CourseList/CourseListRow.test.js

import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('CourseListRow', () => {
  it('renders without crashing', () => {
    shallow(<CourseListRow textFirstCell="Test Header" isHeader />);
  });

  it('renders one cell with colspan=2 when textSecondCell does not exist', () => {
    const wrapper = shallow(<CourseListRow textFirstCell="Test Header" isHeader />);
    expect(wrapper.find('th[colSpan="2"]')).toHaveLength(1);
  });

  it('renders two cells when textSecondCell is present', () => {
    const wrapper = shallow(<CourseListRow textFirstCell="Name" textSecondCell="Credit" isHeader />);
    expect(wrapper.find('th')).toHaveLength(2);
  });

  it('renders correctly two td elements within a tr element', () => {
    const wrapper = shallow(<CourseListRow textFirstCell="ES6" textSecondCell="60" />);
    expect(wrapper.find('td')).toHaveLength(2);
  });
});
