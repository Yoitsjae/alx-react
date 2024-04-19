// File: task_3/dashboard/src/Notifications/NotificationItem.js

import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  notificationItem: {
    '@media (max-width: 900px)': {
      width: '100%',
      borderTop: '1px solid black',
      padding: '10px 8px',
      fontSize: '20px',
    },
    '@media (min-width: 900px)': {
      borderTop: '1px solid black',
      padding: '10px 8px',
      fontSize: '20px',
    },
  },
});

const NotificationItem = ({ type, value, html }) => {
  return (
    <li className={css(styles.notificationItem)}>
      {html ? <b>test</b> : value}
    </li>
  );
};

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.bool,
};

NotificationItem.defaultProps = {
  value: '',
  html: false,
};

export default NotificationItem;
