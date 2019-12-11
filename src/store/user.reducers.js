import * as TYPES from './user.types';
import { getUserLS } from '../utils/localStorage'

const userLS =  getUserLS();

const initialState = {
    user: userLS,
};

export const user = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.SET_USER:
            return {
                ...state,
                user: action.user,
            }
        case TYPES.LOGOUT:
            return initialState;
        default:
            return state;
    }
};