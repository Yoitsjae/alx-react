import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications component', () => {
  it('should call fetchNotifications when the component is mounted', () => {
    const fetchNotificationsMock = jest.fn();
    shallow(<Notifications fetchNotifications={fetchNotificationsMock} listNotifications={[]} />);
    expect(fetchNotificationsMock).toHaveBeenCalled();
  });
});
