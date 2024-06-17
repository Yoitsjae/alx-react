import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchNotifications } from '../actions/notificationActionCreators';
import Notifications from './Notifications';

const mapDispatchToProps = {
  fetchNotifications,
};

const NotificationsContainer = ({ fetchNotifications }) => {
  useEffect(() => {
    fetchNotifications();
  }, [fetchNotifications]);

  return <Notifications />;
};

export default connect(null, mapDispatchToProps)(NotificationsContainer);
