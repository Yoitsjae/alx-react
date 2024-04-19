// File: task_2/dashboard/src/Notifications/NotificationItem.js

import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  default: {
    color: '#000',
  },
  urgent: {
    color: '#f00',
  },
});

const NotificationItem = ({ type, value, html }) => {
  return (
    <li className={css(type === 'urgent' ? styles.urgent : styles.default)}>
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
