import React, { useState, useReducer } from "react";
import { useParams, useHistory }   from "react-router-dom";
import { useGetAd } from '../../store/user/selectors';


import { Form, Button } from 'react-bootstrap';

import { saveAd } from '../../services/AdService';
import AppNavbar        from '../AppNavbar/AppNavbar';
import TagSelect        from '../TagsSelect/TagSelect'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TYPES = ['sell', 'buy'];

// https://leewarrick.com/blog/a-guide-to-usestate-and-usereducer/
// https://medium.com/javascript-in-plain-english/react-controlled-forms-with-hooks-538762aab935


// uses toast to ui add notifications
toast.configure({
    autoClose: 8000,
    draggable: false,
});


const notifySaved = () => toast.success('Profile saved !', { containerId: 'OK' });
const notifyError = () => toast.error('Error on save !', { containerId: 'KO' });
const notifyWarning = (warning) => toast.warning(warning, { containerId: 'KO' });
///


function AdEdit(ads) { 

    // Create & update Ads
    
    const initialAdState = {
            advert: {
                id: '',
                name: '',
                price: '',
                description: '',
                type: TYPES[0],
                photo: '',
                tags:[]
            },
            title: 'Create advertisement',
            method: 'POST',
            status: false,        
    }

    // const [adState, setAdState] = useState(initialAdState);

    const { id } = useParams();

    const ad = useGetAd(ads, id);

    console.log('loadedAd', ad);
    console.log('typeof loadedAd', typeof ad);
    
    const [adState, setAdState] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            name: typeof (ad) === 'undefined' ? '' : ad.name,
            // surname: typeof (user) === 'undefined' ? '' : user.surname,
            // title: typeof (user) === 'undefined' ? 'Register user' : 'Edit profile', // do well!!
        }
    );

    // if (ad){

    //     const loadedAd = {
    //         ...initialAdState,
    //         advert: ad,
    //         title: 'Edit advertisement',
    //         method: 'PUT',
    //     };

    //     setAdState(loadedAd);
    // }

    const handleChange = event => {
        const name = event.target.name;
        const newValue = event.target.value;
        setAdState({ [name]: newValue });
    } 

    const handleSubmit = event => {
        
        event.preventDefault();

        // console.log('submit', adState);
        // return false;

        const { name, price, description, photo } = adState.advert;

        if (name.trim().length <= 3) {
            alert("The name must be bigger than 3 characters");
            return;
        }

        if (description.trim().length <= 12) {
            alert("The description must be bigger than 12 characters");
            return;
        }

        if (price <= 0) {
            alert("The price must be bigger than 0 €");
            return;
        }

        if (photo.trim().length <= 3) {
            alert("The path to photo must be bigger than 3 characters");
            return;
        }        

        saveAd(adState.advert, adState.method, adState.advert.id)
            .then (res => { 

                    console.log('res', res)
                    if (res === 'OK') {
                        
                        if (adState.method === 'POST')
                            this.setState({ 
                                title: 'Advertisement saved!',
                                status: true
                            });

                        notifySaved();
                    } else {
                        notifyError();
                    }
                })
            .catch(res => {
                
                console.log('res', res)
            })


        return false;
    } 


    const { advert, title, status } = adState;
    const history = useHistory();


    return (
        <>
            <AppNavbar />
            <ToastContainer enableMultiContainer containerId={'OK'} position={toast.POSITION.TOP_RIGHT} />
            <ToastContainer enableMultiContainer containerId={'KO'} position={toast.POSITION.TOP_RIGHT} />
            
            <div style={{ padding: "20px", maxWidth: "420px", margin: "50px auto" }}>
                <h2>{title}</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formGroupName" >
                        <Form.Label>Name</Form.Label>
                        <Form.Control name="name" placeholder="Product name" value={advert.name} onChange={ handleChange } />
                    </Form.Group>
                    <Form.Group controlId="formGroupPrice" >
                        <Form.Label>Price</Form.Label>
                        <Form.Control name="price" placeholder="on €" value={advert.price} onChange={ handleChange } type="number" />
                    </Form.Group>
                    <Form.Group controlId="formGroupPhoto" >
                        <Form.Label>Photo</Form.Label>
                        <Form.Control name="photo" placeholder="Select a prety photo" value={advert.photo} onChange={ handleChange } />
                    </Form.Group>
                    <Form.Group controlId="formGroupType" >
                        <Form.Label>Type</Form.Label>
                        {TYPES.map(type => (
                            <div key={`inline-${type}`} className="mb-3">
                                <Form.Check inline type='radio' id={`check-api-${type}`}>
                                    <Form.Check.Input 
                                        name='type' 
                                        value={`${type}`} 
                                        type='radio' 
                                        onChange={ handleChange }
                                        checked = { `${type}` === advert.type}
                                        />
                                    <Form.Check.Label style= {{textTransform:'capitalize'}}>{` ${type}`}</Form.Check.Label>
                                </Form.Check>
                            </div>
                        ))}
                    </Form.Group>
                    <Form.Group controlId="formGroupDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control name="description" as="textarea" rows="3" value={advert.description} onChange={ handleChange } />
                    </Form.Group>
                    <Form.Group controlId="formGrouptags" >
                        <Form.Label>Tag</Form.Label>
                        <TagSelect onChange={handleChange}  value={ advert.tags } isMulti />
                    </Form.Group>

                    <Button variant="primary" type="submit" disabled={status}>
                        Save
                    </Button>
                    <Button variant="secondary" className="float-right" onClick={() => history.push('/')}>
                        Exit
                    </Button>
                </Form>
            </div>
        </>
    );
}

export default AdEdit;