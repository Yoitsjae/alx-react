// task_1/dashboard/src/Header/Header.test.js

import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header', () => {
  it('renders without crashing', () => {
    shallow(<Header />);
  });

  it('renders an h1 tag', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('h1')).toHaveLength(1);
  });
});
