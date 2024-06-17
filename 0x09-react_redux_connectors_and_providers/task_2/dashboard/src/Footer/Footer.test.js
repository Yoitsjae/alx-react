import { mapStateToProps } from './Footer';
import { fromJS } from 'immutable';

describe('mapStateToProps', () => {
  it('should return the right object from state', () => {
    const state = fromJS({
      user: { name: 'User' },
    });
    const expected = { user: { name: 'User' } };
    expect(mapStateToProps(state)).toEqual(expected);
  });
});
