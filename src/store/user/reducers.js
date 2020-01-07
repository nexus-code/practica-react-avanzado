import * as TYPES from './types';
// import { getUserLS } from '../../utils/localStorage'

// const userLS =  getUserLS();

// const initialState = {
//     user: userLS,
// };

// const empty = {
//     user: '',
// };

const initialState = {
    user: '',
};

export const user = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.SET_USER:
            return {
                ...state,
                user: action.user,
            };

        case TYPES.LOGOUT:
            return initialState;
            // return empty;

        default:
            return state;
    }
};