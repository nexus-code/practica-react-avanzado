import {
    ADS_FETCH_REQUEST,
    ADS_FETCH_FAILURE,
    ADS_FETCH_SUCCESS,

    AD_SAVE_REQUEST,
    AD_SAVE_FAILURE,
    AD_SAVE_SUCCESS,

    // SET_FILTER,
} from './types';

import { searchAds, saveAd } from '../../services/AdService';


export const fetchAds = () => {

    async function __fetchAds(dispatch, getState, extraArgument) {
        dispatch(fetchAdsRequest());
        try {
            const ads = await searchAds();
            dispatch(fetchAdsSuccess(ads));
        } catch (error) {
            dispatch(fetchAdsFailure(error));
        }
    };

    return __fetchAds;
};

export const fetchAdsRequest = () => ({
    type: ADS_FETCH_REQUEST,
});

export const fetchAdsFailure = error => ({
    type: ADS_FETCH_FAILURE,
    error,
});

export const fetchAdsSuccess = ads => ({
    type: ADS_FETCH_SUCCESS,
    ads,
});

export const savedAdRequest = ad => ({
    type: AD_SAVE_REQUEST,
    ad,
});

export const savedAdFailure = error => ({
    type: AD_SAVE_FAILURE,
    error,
});

export const savedAdSuccess = ad => ({
    type: AD_SAVE_SUCCESS,
    ad,
});


export const savedAd = (ad, method) => {

    return async function (dispatch, getState, extraArgument) {

        dispatch(savedAdRequest(ad));

        try {

            const result = await saveAd(ad, method)
            dispatch(savedAdSuccess(result));

            return result;

        } catch (error) {

            dispatch(savedAdFailure());
            return false;
        }
    };
};

// export const setFilter = filter => ({
//     type: SET_FILTER,
//     filter,
// });