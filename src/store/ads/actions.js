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



export const savedAd = (ad, method, id) => {

    console.log('Action savedAd', ad, method, id);

    return async function (dispatch, getState, extraArgument) {
        // No entra ¿dispatch??
        console.log('Action dispatch', ad, method, id);

        dispatch(savedAdRequest());

        const result = await saveAd(ad, method, id)
        .then(() => dispatch(savedAdSuccess()))
        .catch(() => dispatch(savedAdFailure()));
    };
};

// export const savedAd = (ad, method, id) => {

//     console.log('Action savedAd', ad, method, id);

//     async function __savedAd(dispatch, getState, extraArgument) {
//         // No entra ¿dispatch??
//         dispatch(savedAdRequest());

//         try {
//             console.log('savedAd TRY', ad);

//             const result = await saveAd(ad, method, id);
//             dispatch(savedAdSuccess(result));
//             return result;
//         } catch (error) {
//             dispatch(savedAdFailure(error));
//         }
//     };

//     return __savedAd;
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