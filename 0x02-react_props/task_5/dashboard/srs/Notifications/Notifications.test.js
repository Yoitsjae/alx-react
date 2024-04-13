// task_5/dashboard/src/Notifications/Notifications.test.js

import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications', () => {
  it('renders without crashing', () => {
    shallow(<Notifications />);
  });

  it('displays menu item when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('.menuItem')).toHaveLength(1);
  });

  it('does not display Notifications when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('.Notifications')).toHaveLength(0);
  });

  it('displays menu item and Notifications when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    expect(wrapper.find('.menuItem')).toHaveLength(1);
    expect(wrapper.find('.Notifications')).toHaveLength(1);
  });
});
