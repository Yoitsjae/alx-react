// task_4/dashboard/src/HOC/WithLogging.test.js

import React from 'react';
import { shallow } from 'enzyme';
import WithLogging from './WithLogging';

describe('WithLogging', () => {
  it('calls console.log on mount and unmount with Component', () => {
    const spy = jest.spyOn(console, 'log');
    const Component = () => <p>Test</p>;
    const WithLoggingComponent = WithLogging(Component);
    const wrapper = shallow(<WithLoggingComponent />);
    expect(spy).toHaveBeenCalledWith('Component is mounted');
    wrapper.unmount();
    expect(spy).toHaveBeenCalledWith('Component is going to unmount');
    spy.mockRestore();
  });
});
