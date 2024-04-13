// task_4/dashboard/src/CourseList/CourseList.js

import React from 'react';
import PropTypes from 'prop-types';
import CourseListRow from './CourseListRow';
import './CourseList.css';

const CourseList = ({ listCourses }) => {
  return (
    <table id="CourseList">
      <thead>
        <CourseListRow textFirstCell="Available courses" isHeader />
        <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader />
      </thead>
      <tbody>
        {listCourses.length === 0 ? (
          <CourseListRow textFirstCell="No course available yet" />
        ) : (
          listCourses.map(course => (
            <CourseListRow
              key={course.id}
              textFirstCell={course.name}
              textSecondCell={course.credit}
            />
          ))
        )}
      </tbody>
    </table>
  );
};

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    credit: PropTypes.number.isRequired,
  })).isRequired,
};

export default CourseList;
