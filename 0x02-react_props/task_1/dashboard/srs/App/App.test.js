// task_1/dashboard/src/App/App.test.js

import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });
});
