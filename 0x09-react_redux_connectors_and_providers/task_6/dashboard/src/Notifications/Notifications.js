import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchNotifications } from '../actions/notificationActionCreators';
import { getUnreadNotificationsByType } from '../selectors/notificationSelector';

const mapStateToProps = (state) => {
  return {
    listNotifications: getUnreadNotificationsByType(state),
  };
};

const mapDispatchToProps = {
  fetchNotifications,
};

const Notifications = ({ listNotifications, fetchNotifications }) => {
  useEffect(() => {
    fetchNotifications();
  }, [fetchNotifications]);

  return (
    <div>
      <button onClick={() => setNotificationFilter('URGENT')}>‼️</button>
      <button onClick={() => setNotificationFilter('DEFAULT')}>💠</button>
      {/* Render listNotifications */}
    </div>
  );
};

Notifications.propTypes = {
  listNotifications: PropTypes.array.isRequired,
  fetchNotifications: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
