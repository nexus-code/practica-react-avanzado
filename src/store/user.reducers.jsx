import * as TYPES from './user.types';

const initialState = {
    user: {},
};

export const user = (state = initialState.user, action) => {
    switch (action.type) {
        case TYPES.SET_USER:
            return action.user;
        case TYPES.LOGOUT:
            return initialState.user;
        default:
            return state;
    }
};