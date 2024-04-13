// task_0/dashboard/src/Footer/Footer.test.js

import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer', () => {
  it('renders without crashing', () => {
    shallow(<Footer />);
  });

  it('renders a p tag with text "© 2024 My App"', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('p').text()).toEqual('© 2024 My App');
  });
});
