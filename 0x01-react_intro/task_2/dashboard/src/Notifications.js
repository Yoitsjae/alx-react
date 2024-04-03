// task_2/dashboard/src/Notifications.js
import React from 'react';
import { getLatestNotification } from './utils';
import './Notifications.css';

function Notifications() {
  return (
    <div className="Notifications">
      <button onClick={() => console.log("Close button has been clicked")} aria-label="Close">
        <img src="close-icon.png" alt="close" />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
      </ul>
    </div>
  );
}

export default Notifications;
