// task_2/dashboard/src/Notifications/NotificationItem.js

import React from 'react';

const NotificationItem = ({ type, html, value }) => {
  return (
    <li data-notification-type={type} dangerouslySetInnerHTML={html}>
      {value}
    </li>
  );
};

export default NotificationItem;
