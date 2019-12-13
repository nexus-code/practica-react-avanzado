import { useEffect, useState } from "react";
import { getAdDetail } from '../../services/AdService';

import { getUserLS } from '../../utils/localStorage';

export function getUser() {

    return getUserLS();
}

const useGetAdFromAPI = (id) => {
    // Search the ad in API 

    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {

        getAdDetail(id).then(ad => {

            if (ad.hasOwnProperty('success')) {

                setError('404');
            } else {

                setResponse(ad);
            }
        });

    }, [id]);

    // Refactor: handle error

    return response
};

const getAdFromStore = (ads, id) => {
    // ad stored by redux
    return ads.filter(ad => ad.id === id)[0];
};

export const useGetAd = (adsStore, id) => {

    console.log('From selector with lovE!!');

    // WARNING: hook in conditional statement: fetch add from store or API.
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return typeof adsStore.ads.length !== 'undefined' ? getAdFromStore(adsStore.ads, id) : useGetAdFromAPI(id);
};