import {
    FETCH_ADS_REQUEST,
    FETCH_ADS_FAILURE,
    FETCH_ADS_SUCCESS,

    SAVED_AD_REQUEST,
    SAVED_AD_FAILURE,
    SAVED_AD_SUCCESS,

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


// 1. Work out of Redux
export const savedAd = async (ad, method, id) => {

    // console.log('Action savedAd', ad, method, id);
    console.error('CONECTION TO STORE PROBLEMS: store/ads/actions: No dispatch arrives');
   
    const result = await saveAd(ad, method, id)
        .then()
        .catch();

    console.log('Action savedAd result', result);

    return result;
};

// 2. no dispatch arrives
// export const savedAd = (ad, method, id) => {

//     console.log('Action savedAd', ad, method, id);
//     console.error('store/ads/actions ln 58: no dispatch arrives');

//     return {async function (dispatch, getState, extraArgument) {
//         // No entra ¿dispatch??
//         console.log('Action dispatch', ad, method, id);

//         dispatch(savedAdRequest());

//         const result = await saveAd(ad, method, id)
//         .then(() => dispatch(savedAdSuccess()))
//         .catch(() => dispatch(savedAdFailure()));
//     }};
// };

export const savedAdRequest = () => ({
    type:SAVED_AD_REQUEST,
});

export const savedAdFailure = error => ({
    type:SAVED_AD_FAILURE,
    error,
});

export const savedAdSuccess = ad => ({
    type:SAVED_AD_SUCCESS,
    ad,
});

// export const setFilter = filter => ({
//     type: SET_FILTER,
//     filter,
// });