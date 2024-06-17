import rootReducer from './rootReducer';
import { fromJS } from 'immutable';

describe('rootReducer', () => {
  it('should return the initial state', () => {
    const initialState = {
      courses: fromJS({}),
      notifications: fromJS({}),
      ui: fromJS({}),
    };
    expect(rootReducer(undefined, {})).toEqual(initialState);
  });
});
