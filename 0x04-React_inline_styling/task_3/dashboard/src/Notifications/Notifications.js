// File: task_3/dashboard/src/Notifications/Notifications.js

import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  notifications: {
    '@media (max-width: 900px)': {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: '#f2f2f2',
      border: 'none',
      padding: 0,
      fontSize: '20px',
    },
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
