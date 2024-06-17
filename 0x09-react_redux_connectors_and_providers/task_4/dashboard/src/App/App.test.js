import { mapStateToProps } from './App';
import { fromJS } from 'immutable';

describe('mapStateToProps', () => {
  it('should return the right object from state', () => {
    const state = fromJS({
      ui: {
        isUserLoggedIn: true,
        isNotificationDrawerVisible: false,
      },
    });
    const expected = { isLoggedIn: true, displayDrawer: false };
    expect(mapStateToProps(state)).toEqual(expected);
  });
});
