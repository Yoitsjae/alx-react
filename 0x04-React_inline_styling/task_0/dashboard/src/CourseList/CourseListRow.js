// File: task_0/dashboard/src/CourseList/CourseListRow.js

import React from 'react';

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  const rowStyle = {
    backgroundColor: isHeader ? '#deb5b545' : '#f5f5f5ab',
  };

  const cellStyle = {
    padding: '8px',
    textAlign: 'left',
  };

  return (
    <tr style={rowStyle}>
      {isHeader ? (
        <th style={cellStyle} colSpan={textSecondCell ? '2' : '1'}>
          {textFirstCell}
        </th>
      ) : (
        <>
          <td style={cellStyle}>{textFirstCell}</td>
          {textSecondCell && <td style={cellStyle}>{textSecondCell}</td>}
        </>
      )}
    </tr>
  );
};

export default CourseListRow;
