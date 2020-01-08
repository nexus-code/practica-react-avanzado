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

import { toast } from 'react-toastify';

// uses toast to ui add notifications   
const notifySaved = () => toast.success('Advert saved!');
const notifyError = () => toast.error('Error on save advert!');
// const notifyWarning = (warning) => toast.warning(warning);


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
// export const savedAd = (ad, method) => (dispatch, _getState, { history }) => {

    return async function (dispatch, getState, extraArgument) {

        dispatch(savedAdRequest(ad));

        try {

            const result = await saveAd(ad, method)
            dispatch(savedAdSuccess(result));
            notifySaved();

            // console.log('history.location.pathname', history.location.pathname);
            // if (history.location.pathname === '/advert/create')
            //     history.push(`/advert/edit/${result.id}`);

            return result;

        } catch (error) {

            dispatch(savedAdFailure());
            notifyError();

            return false;
        }
    };
};

// export const setFilter = filter => ({
//     type: SET_FILTER,
//     filter,
// });