import { ADS_FILTERS } from '../constants';
import * as TYPES from './ads.types';

const initialState = {
    filter: ADS_FILTERS.ALL,
};

export const filter = (state = initialState.filter, action) => {
    switch (action.type) {
        case TYPES.SET_FILTER:
            return action.filter;
        default:
            return state;
    }
};