// task_3/dashboard/src/utils.test.js
import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('Test getFullYear function', () => {
  it('should return the current year', () => {
    expect(getFullYear()).toEqual(new Date().getFullYear());
  });
});

describe('Test getFooterCopy function', () => {
  it('should return "Holberton School" when isIndex is true', () => {
    expect(getFooterCopy(true)).toEqual('Holberton School');
  });

  it('should return "Holberton School main dashboard" when isIndex is false', () => {
    expect(getFooterCopy(false)).toEqual('Holberton School main dashboard');
  });
});

describe('Test getLatestNotification function', () => {
  it('should return the correct notification', () => {
    const notification = getLatestNotification();
    expect(notification).toEqual('<strong>Urgent requirement</strong> - complete by EOD');
  });
});
