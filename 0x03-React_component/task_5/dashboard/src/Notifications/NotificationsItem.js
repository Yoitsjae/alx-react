// task_5/dashboard/src/Notifications/Notifications.test.js

import React from 'react';
import { shallow, mount } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications', () => {
  it('renders correctly with empty list', () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    expect(wrapper.find('ul')).toHaveLength(1);
    expect(wrapper.find(NotificationItem)).toHaveLength(1);
  });

  it('renders correctly with a list of notifications', () => {
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available', html: null },
      { id: 2, type: 'urgent', value: 'New resume available', html: null },
    ];
    const wrapper = mount(<Notifications listNotifications={listNotifications} />);
    expect(wrapper.find('ul')).toHaveLength(1);
    expect(wrapper.find(NotificationItem)).toHaveLength(2);
  });
});
