// File: task_1/dashboard/src/Notifications/Notifications.js

import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  notifications: {
    backgroundColor: '#f2f2f2',
    border: '1px solid #333',
    padding: '20px',
    display: 'none',
  },
});

const Notifications = () => {
  return (
    <div className={css(styles.notifications)}>
      Your notifications will appear here
    </div>
  );
};

export default Notifications;
