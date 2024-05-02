// task_5/dashboard/src/Notifications/NotificationItem.js

import React, { PureComponent } from 'react';

class NotificationItem extends PureComponent {
  render() {
    const { type, value, html, markAsRead } = this.props;
    return (
      <li data-notification-type={type} onClick={() => markAsRead(this.props.id)}>
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
