import { useState } from "react";
import { getAdDetail } from '../../services/AdService';
import { fetchAds } from '../../store/ads/actions';

export function getAds(ads, filter) {

    // basic implementation

    return ads;
}


export const useGetAdFromAPI = (id) => {
    // Search the ad in API 

    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);


    getAdDetail(id).then(ad => {

        if (ad.hasOwnProperty('success')) {

            setError('404');
        } else {

            setResponse(ad);
        }
    });

    return error === '404' ? null : response;
};


// DEPRECATED!!!!!!!!!!!!!!!!!!!!!!!!!!!!
export const getAdFromStore = (ads, id) => {


    // console.log('getAdFromStore', ads);
    // console.log('getAdFromStore []', ads[ads]);
    // console.log('getAdFromStore ads.length', ads.length);


    //if (typeof ads === 'undefined' || typeof id === 'undefined') {
    if (ads.length === 'undefined' || typeof id === 'undefined'){
        return null
    }

    // ad stored by redux
    return ads.filter(ad => ad.id === id)[0];
};
/////////////////////////////////////////


export const getAd = (props, id) => {

    //props.ads.ads array of ads in redux

    const { ads } = props.ads;

    return ads.filter(ad => ad.id === id)[0];
};

export const useGetAd = (ads, id) => {

    if (!id)
        return null; // improve this if (control input)


    if (typeof ads.length === 'undefined'){
        // WARNING: hook in conditional statement: fetch add from store or API.
        // eslint-disable-next-line react-hooks/rules-of-hooks
        return useGetAdFromAPI(id)
    }

    // Improve this:
    // WARNING: hook in conditional statement: fetch add from store or API. 
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return typeof ads.length !== 'undefined' ? getAdFromStore(ads, id) : useGetAdFromAPI(id);
};

export const editAd = (id) => {


}