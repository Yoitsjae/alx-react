import { mapStateToProps } from './App';
import { fromJS } from 'immutable';

describe('mapStateToProps', () => {
  it('should return the right object from state', () => {
    const state = fromJS({
      isUserLoggedIn: true,
    });
    const expected = { isLoggedIn: true };
    expect(mapStateToProps(state)).toEqual(expected);
  });
});
