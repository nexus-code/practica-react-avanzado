import { ads } from './reducers';
import * as TYPES from './types';

import AdModel from '../../models/AdModel'

describe('ads reducers', () => {
  
  it('should return the initial state', () => {
    const action = { type: 'dummy_action' };
    const initialState = [];

    expect(ads([], action)).toEqual(initialState);
  })

  // https://jestjs.io/docs/en/expect#tobeinstanceofclass
  // it('should return that initial state is array of ads', () => {
  //   expect(ads([], {})).toStrictEqual([])
  // })

  // it('should handle fetch adverts', () => {
  
  //   });

  // it('should handle save advert', () => {

  // });


});
