// task_5/dashboard/src/Notifications/Notifications.test.js
import React from 'react';
import { render } from '@testing-library/react';
import Notifications from './Notifications';

test('renders notifications component', () => {
  const { getByText } = render(<Notifications />);
  const textElement = getByText(/notifications/i);
  expect(textElement).toBeInTheDocument();
});
