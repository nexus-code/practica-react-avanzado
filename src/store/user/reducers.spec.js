import { user } from './reducers';
import * as TYPES from './types';

describe('user reducers', () => {
  
  const initialState = {name: 'user name', surname: 'user_surname'};

  it('dummy_action: should return the initial state', () => {
    const action = { type: 'dummy_action' };
    expect(user(initialState, action)).toEqual(initialState);
  })

  it('SET_USER: should return empty string', () => {
    const action = { type: TYPES.SET_USER };
    expect(user(initialState, action)).toEqual(initialState);
  })

  it('LOGOUT: should return empty string', () => {
    const action = { type: TYPES.LOGOUT };
    expect(user(initialState, action)).toEqual('');
  })

});
