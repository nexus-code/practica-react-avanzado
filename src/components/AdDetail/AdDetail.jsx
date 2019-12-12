import React, { useEffect, useState } from "react";
import { useParams, useHistory } from 'react-router';
import { getAdDetail } from '../../services/AdService';
import { Button } from 'react-bootstrap'

import AppNavbar from '../AppNavbar/AppNavbar';

const useGetAdFromAPI = (id) => {
    // Search the ad in API 

    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {

        getAdDetail(id).then(ad => {

            if (ad.hasOwnProperty('success')) {

                setError('404');
            } else {

                setResponse( ad );
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

const useGetAd = (adsStore, id) => {

    // hook in conditional statement: fetch add from store or API
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return typeof adsStore.ads.length !== 'undefined' ? getAdFromStore(adsStore.ads, id) : useGetAdFromAPI(id);
};

function AdDetail(ads) {

    const { id } = useParams();
    const history = useHistory();
    const ad = useGetAd(ads, id);

    return <>
        <AppNavbar />
        <div className="container">
            {
                ad
                &&
                <div>
                    <img src={ad.photo} alt={ad.name} />

                    <h1 style={{
                        color: ad.type = 'sell' ? 'green' : 'blue'
                    }}>{ad.name} <span className='badge badge-primary'>{ad.price}€</span>
                    </h1>
                    <p>{ad.description}</p>
                    <p>
                        {
                            ad.tags.map(tag => <span className='badge badge-secondary p-2 mr-2' key={tag}> {tag} </span>)
                        }
                    </p>
                    <br />
                    <hr />
                    <br />
                    <Button className='btn btn-warning' onClick={() => history.push(`/advert/edit/${ id }`)} style={{ float: 'right' }} >Edit</Button>
                    <Button className='btn btn-dark' onClick={() => history.goBack()}>Go back</Button>
                </div>
            }

            {
                !ad
                &&
                <div>
                    <h3><br/>404. No se encuentra el elemento solicitado</h3>
                </div>
            }
        </div>
    </>;

}

export default AdDetail;