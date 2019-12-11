import {
    FETCH_ADS_REQUEST,
    FETCH_ADS_FAILURE,
    FETCH_ADS_SUCCESS,
    // SET_FILTER,
} from './types';

export const fetchAds = () => {
    return async function (dispatch, _getState, { services: { AdsService } }) {
        dispatch(fetchAdsRequest());
        try {
            const ads = await AdsService.getAllAds();
            dispatch(fetchAdsSuccess(ads));
        } catch (error) {
            dispatch(fetchAdsFailure(error));
        }
    };
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

// export const setFilter = filter => ({
//     type: SET_FILTER,
//     filter,
// });