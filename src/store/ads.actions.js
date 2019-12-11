import {

    FETCH_ADS_REQUEST,
    FETCH_ADS_FAILURE,
    FETCH_ADS_SUCCESS,

    SET_FILTER,

} from './ads.types';

import AdService from '../services/AdService';


export const fetchAds = () => {
    
    async function myFetchAds(dispatch, getState, extraArgument) {
        dispatch(fetchAdsRequest());
        try {
            const ads = await AdService.searchAds();
            dispatch(fetchAdsSuccess(ads));
        } catch (error) {
            dispatch(fetchAdsFailure(error));
        }
    }
    
    return myFetchAds;
};

export const fetchAdsRequest = () => ({
    type: FETCH_ADS_REQUEST,
});

export const fetchAdsFailure = error => ({
    type: FETCH_ADS_FAILURE,
    error,
});

export const fetchAdsSuccess = ads => ({
    type: FETCH_ADS_SUCCESS,
    ads,
});

export const setFilter = filter => ({
    type: SET_FILTER,
    filter,
});