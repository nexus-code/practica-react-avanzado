
import Axios from 'axios';
import AdModel from '../models/AdModel';

const API_URL = 'http://localhost:3001/apiv1/';

/*
    API: https://github.com/IsmaelB83/keepcoding-backend-node
*/

/**
 * 
 * @param {*} url of API
 */
const getFetch = (url) => {
    return fetch(url,
        { method: "GET" },
        { Accept: "application/json, text/plain, */*" },
        { mode: "cors" }
    )
    .then(res => res.json());
}

/**
 * return[] of tags (strings)
 */
const getTagsList = () => {
    
    return getFetch(`${API_URL}tags`)
        .then(res => res.results)
        .catch(error => console.error('Error:', error));
}

/**
 * 
 * @param {*} id The ad id to fetch
 */
const getAdDetail = (id) => {
    return getFetch(`${API_URL}anuncios/${id}`)
        .then(res => {
            if (!res.success) {
                return res;
            } else {
                return new AdModel(res.result);
            }
        })
        .catch(error => console.error('Error:', error));
}

/**
 * 
 * @param {*} query: filter anuncios. Optimize  with searchAd
 */

const searchAds = (query) => {
    
    const url = query === '' ? `${API_URL}anuncios` : `${API_URL}anuncios/?${query}`;
    
    return getFetch(url)
        .then(res => res.results.map(ad => new AdModel(ad)))
        .catch(error => console.error('Error:', error));
}


/**
 *
 * @param {*} id: filter by ad.id. Optimize with searchAds
 */
const searchAd = (id) => {

    const url = `${API_URL}anuncios/${id}`;

    return Axios.get(url).then(res =>
        new AdModel(res.data.result),
    );
}

/**
 * 
 * @param {*} ad {advertisement}
 * @param {*} method POST / PUT for insert or update
 */
const saveAd = (ad, method) => {

    const baseURL = `${API_URL}anuncios`;

    // if (method === 'POST') {

    //     return Axios.post(baseURL, null, { data: ad }).then(
    //         res => new AdModel(res.data.result),
    //     );
    // }

    // if (method === 'PUT') {
                
    //     return Axios.put(`${baseURL}/${ad.id}`, null, { data: ad }).then(
    //         res => new AdModel(res.data.result),
    //     );
    // }

    switch (method) {
        case 'POST':
            return Axios.post(baseURL, null, { data: ad }).then(
                res => new AdModel(res.data.result),
            );

        case 'PUT':
            return Axios.put(`${baseURL}/${ad.id}`, null, { data: ad }).then(
                res => new AdModel(res.data.result),
            );

        default:
            return 'Invalid method';
    }
}

export {
    getTagsList,
    searchAds,
    searchAd,
    getAdDetail,
    saveAd
};