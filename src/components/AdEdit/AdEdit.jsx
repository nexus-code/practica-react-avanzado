import React from 'react'
import { useParams, useHistory } from 'react-router';
import { getAd }  from '../../store/ads/selectors';
import { saveAd } from '../../services/AdService';
import HookForm   from '../Form/HookForm'
import AppNavbar  from '../AppNavbar/AppNavbar';
import { Button } from 'react-bootstrap';

import fieldsForm from './utils/fields'

function AdEdit(props) {
    
    const { id } = useParams();
    const history = useHistory();
 
    const ad = getAd(props, id);

    const F = fieldsForm

    // Improve with map...
    const adValues = {
        ...F,
        name: {
            ...F.name,
            value: ad.name,
        },
        description: {
            ...F.description,
            value: ad.description,
        },
        price: {
            ...F.price,
            value: ad.price,
        },
        type: {
            ...F.type,
            value: ad.type,
        },
        // handleSubmit: 'handleSubmit',
    };

    const formProps = {
        ...props,
        fieldsForm: adValues,
    }
    
    const handleSubmit = event => {

        event.preventDefault();

        console.log('submit', 'submit');
        return false;

        // const { name, price, description, photo } = adState.advert;

        // if (name.trim().length <= 3) {
        //     alert("The name must be bigger than 3 characters");
        //     return;
        // }

        // if (description.trim().length <= 12) {
        //     alert("The description must be bigger than 12 characters");
        //     return;
        // }

        // if (price <= 0) {
        //     alert("The price must be bigger than 0 €");
        //     return;
        // }

        // if (photo.trim().length <= 3) {
        //     alert("The path to photo must be bigger than 3 characters");
        //     return;
        // }

        // saveAd(adState.advert, adState.method, adState.advert.id)
        //     .then(res => {

        //         console.log('res', res)
        //         if (res === 'OK') {

        //             if (adState.method === 'POST')
        //                 this.setState({
        //                     title: 'Advertisement saved!',
        //                     status: true
        //                 });

        //             // notifySaved();
        //         } else {
        //             // notifyError();
        //         }
        //     })
        //     .catch(res => {

        //         console.log('res', res)
        //     })


        return false;
    } 

    return <>
            <AppNavbar />
             <div className="container">
                {
                    ad
                    &&
                    <HookForm {...formProps} />
                }
                {
                    !ad
                    &&
                    <div>
                        <br />
                        <h3> Incorrect access </h3>
                        <p>Follow the usual path to edit an ad </p>
                        <br />
                        <Button className='btn btn-default' onClick={() => history.push(`/`)} >Go Home</Button>
                    </div>
                }
            </div>
        </>
        ;

}

export default AdEdit;