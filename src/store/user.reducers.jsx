import * as TYPES from './user.types';

const initialState = {
    user: {},
};

export const user = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.SET_USER:
            return {
                ...state,
                user: action.user
            }
        case TYPES.LOGOUT:
            return initialState.user;
        default:
            return state;
    }
};