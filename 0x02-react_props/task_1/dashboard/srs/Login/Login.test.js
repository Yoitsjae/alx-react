// task_1/dashboard/src/Login/Login.test.js

import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('Login', () => {
  it('renders without crashing', () => {
    shallow(<Login />);
  });

  it('renders two input fields and one button', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input')).toHaveLength(2);
    expect(wrapper.find('button')).toHaveLength(1);
  });
});
