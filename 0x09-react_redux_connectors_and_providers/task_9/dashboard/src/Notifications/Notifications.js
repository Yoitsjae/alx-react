import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUnreadNotificationsByType } from '../selectors/notificationSelector';
import { setNotificationFilter } from '../actions/notificationActionCreators';

const mapStateToProps = (state) => {
  return {
    listNotifications: getUnreadNotificationsByType(state),
  };
};

const mapDispatchToProps = {
  setNotificationFilter,
};

const Notifications = ({ listNotifications, setNotificationFilter }) => {
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
  setNotificationFilter: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
