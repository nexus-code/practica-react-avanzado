import {
    SET_USER,
    LOGOUT,
} from './user.types';

export const setUser = user => ({
    type: SET_USER,
    user,
});

export const logout = () => ({
    type: LOGOUT,
});