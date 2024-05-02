// task_2/dashboard/src/Notifications/NotificationItem.js

import React, { Component } from 'react';

class NotificationItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { id, markAsRead } = this.props;
    console.log(`Notification ${id} has been marked as read`);
    markAsRead(id);
  }

  render() {
    const { type, value, html, markAsRead } = this.props;
    return (
      <li data-notification-type={type} onClick={this.handleClick}>
        {html}
        {value}
      </li>
    );
  }
}

NotificationItem.defaultProps = {
  type: 'default',
  value: '',
  html: '',
  markAsRead: () => {},
};

NotificationItem.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({ type: PropTypes.string, __html: PropTypes.string }),
  markAsRead: PropTypes.func,
};

export default NotificationItem;
