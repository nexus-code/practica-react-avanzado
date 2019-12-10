import {
    SET_FILTER,
} from './user.types';

export const setFilter = filter => ({
    type: SET_FILTER,
    filter,
});