// File: task_4/dashboard/src/Notifications/Notifications.js

import React from 'react';
import { StyleSheet, css, keyframes } from 'aphrodite';

const bounce = keyframes({
  '0%': {
    transform: 'translateY(0)',
  },
  '50%': {
    transform: 'translateY(-5px)',
  },
  '100%': {
    transform: 'translateY(5px)',
  },
});

const opacityChange = keyframes({
  '0%': {
    opacity: 0.5,
  },
  '100%': {
    opacity: 1,
  },
});

const styles = StyleSheet.create({
  menu: {
    '@media (max-width: 900px)': {
      position: 'fixed',
      top: '20px',
      right: '20px',
      backgroundColor: '#fff8f8',
      cursor: 'pointer',
      animationName: [bounce, opacityChange],
      animationDuration: '1s, 0.5s',
      animationIterationCount: '3',
    },
    '@media (min-width: 900px)': {
      display: 'none',
    },
  },
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

const Notifications = ({ displayDrawer }) => {
  return (
    <>
      <div className={css(styles.menu)} onClick={displayDrawer}>
        <p>Your notifications</p>
      </div>
      {displayDrawer && (
        <div className={css(styles.notifications)}>
          Your notifications will appear here
        </div>
      )}
    </>
  );
};

export default Notifications;
