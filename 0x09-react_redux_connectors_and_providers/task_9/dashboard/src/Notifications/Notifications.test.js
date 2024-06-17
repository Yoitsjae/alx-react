import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications component', () => {
  it('should call setNotificationFilter with URGENT when the first button is clicked', () => {
    const setNotificationFilterMock = jest.fn();
    const wrapper = shallow(<Notifications setNotificationFilter={setNotificationFilterMock} listNotifications={[]} />);
    wrapper.find('button').at(0).simulate('click');
    expect(setNotificationFilterMock).toHaveBeenCalledWith('URGENT');
  });

  it('should call setNotificationFilter with DEFAULT when the second button is clicked', () => {
    const setNotificationFilterMock = jest.fn();
    const wrapper = shallow(<Notifications setNotificationFilter={setNotificationFilterMock} listNotifications={[]} />);
    wrapper.find('button').at(1).simulate('click');
    expect(setNotificationFilterMock).toHaveBeenCalledWith('DEFAULT');
  });
});
