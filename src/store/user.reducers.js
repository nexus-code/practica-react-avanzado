import * as TYPES from './user.types';
import { getUserLS } from '../utils/localStorage'


const initialState = {
    logged: getUserLS(),
};

console.log('initialState', initialState);


export const user = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.SET_USER:
            return {
                ...state,
                user: action.user,
            }
        case TYPES.LOGOUT:
            return initialState.user;
        default:
            return state;
    }
};