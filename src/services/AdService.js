
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
 * @param {*} query: filter anuncios
 */

const searchAds = (query) => {
    
    const url = query === '' ? `${API_URL}anuncios` : `${API_URL}anuncios/?${query}`;
    
    return getFetch(url)
        .then(res => res.results.map(ad => new AdModel(ad)))
        .catch(error => console.error('Error:', error));
}

/**
 * 
 * @param {*} ad {advertisement}
 * @param {*} method POST / PUT (for insert / update ) 
 */
const saveAd = (ad, method, id) => {

    const baseURL = `${API_URL}anuncios`;

    if (method === 'POST') {

        return Axios.post(baseURL, null, { data: ad }).then(
            res => new AdModel(res.data.result),
        );
    }

    if (method === 'PUT') {
                
        return Axios.put(`${baseURL}/${ad.id}`, null, { data: ad }).then(
            res => new AdModel(res.data.result),
        );
    }
}

// Pre axios
const __saveAd = (ad, method, id) => {

    // return fetch(`${API_URL}anuncios/${id}`, {
    const ___res = fetch(`${API_URL}anuncios/${id}`, {
        crossDomain: true,
        method: `${method}`,
        mode: "cors",
        body: JSON.stringify(ad), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            }
        })
        // .then(res => {
        //     // the API returns status, but not de advert sent 
        //     console.log('saveAd res', res)
        //     console.log('saveAd res.result', res.result)
        //     // if (res.status === 200) {
        //     //     return 'OK';
        //     // } else {
        //     //     return res;
        //     // }
        //     return res;
        // })
        // .then(res => new AdModel(res))
        .then(res => res)
        .catch(error => console.error('Error:', error));

    console.log('saveAd method', method)
    console.log('saveAd ___res', ___res)
    return ___res;
}

export {
    getTagsList,
    searchAds,
    getAdDetail,
    saveAd
};