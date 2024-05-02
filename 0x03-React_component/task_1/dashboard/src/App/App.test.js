// task_1/dashboard/src/App/App.test.js

import React from 'react';
import { shallow } from 'enzyme';
import App from '../../../../task_2/dashboard/src/Notifications/NotificationsItem';

describe('App', () => {
  it('calls logOut and displays alert when ctrl+h is pressed', () => {
    const logOut = jest.fn();
    const wrapper = shallow(<App logOut={logOut} />);
    const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' });
    window.dispatchEvent(event);
    expect(logOut).toHaveBeenCalled();
    expect(window.alert).toHaveBeenCalledWith('Logging you out');
  });
});
