// task_2/dashboard/src/Notifications/Notifications.test.js

import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications', () => {
  it('renders without crashing', () => {
    shallow(<Notifications />);
  });

  it('renders NotificationItem elements instead of li', () => {
    const wrapper = shallow(<Notifications displayDrawer listNotifications={[]} />);
    expect(wrapper.find(NotificationItem)).toHaveLength(1);
  });

  it('renders the correct html for the first NotificationItem element', () => {
    const listNotifications = [
      {
        id: 1,
        type: 'default',
        html: { __html: '<u>test</u>' },
        value: 'Test Notification'
      },
      {
        id: 2,
        type: 'urgent',
        html: { __html: '<b>urgent</b>' },
        value: 'Urgent Notification'
      }
    ];
    const wrapper = shallow(<Notifications displayDrawer listNotifications={listNotifications} />);
    const notificationItem = wrapper.find(NotificationItem).first();
    expect(notificationItem.prop('type')).toEqual('default');
    expect(notificationItem.prop('html')).toEqual({ __html: '<u>test</u>' });
    expect(notificationItem.prop('value')).toEqual('Test Notification');
  });
});
