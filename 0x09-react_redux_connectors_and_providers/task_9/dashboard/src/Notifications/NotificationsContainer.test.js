import React from 'react';
import { shallow } from 'enzyme';
import NotificationsContainer from './NotificationsContainer';

describe('NotificationsContainer component', () => {
  it('should call fetchNotifications when the component is mounted', () => {
    const fetchNotificationsMock = jest.fn();
    shallow(<NotificationsContainer fetchNotifications={fetchNotificationsMock} />);
    expect(fetchNotificationsMock).toHaveBeenCalled();
  });
});
