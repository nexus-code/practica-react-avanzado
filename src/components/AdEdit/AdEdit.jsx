import React from "react";
import { useParams, useHistory } from 'react-router';
import useForm from '../Form/useForm';
import { Form, Button } from 'react-bootstrap';
import { getAd } from '../../store/ads/selectors';
import { savedAd }  from '../../store/ads/actions';
// import { saveAd } from '../../services/AdService';
import AppNavbar from '../AppNavbar/AppNavbar';
import TagSelect from '../TagsSelect/TagSelect'

const TYPES = ['sell', 'buy'];

function AdEdit(props) {

    // Create & update Ads

    let title  = 'Edit advert';
    let method = 'PUT'; //Edit , POST to add
    let  record = {
        id: '',
        name: '',
        price: '',
        description: '',
        type: TYPES[0],
        photo: '',
        tags: []
    };
    const history = useHistory();
    const { id } = useParams();
    
    if (id === undefined) {

        title  = 'Create new advert';
        method = 'POST';
    } else {

        record = getAd(props, id);
    }

    const handleSubmitCallback = () => {

        // Use Redux: ¿problems with dispatch?

        console.log('handleSubmitCallback', formInput, method, record.id);
        savedAd(formInput, method, record.id);

        // Throught adsServide. Work ok
        // await saveAd(formInput, method, record.id)
        //     .then(res => {
        //         console.log('res', res)
        //         if (res === 'OK') {

        //             return res;
        //         } else {

        //             notifyWarning(`${res.status}: ${res.statusText}`);
        //             return 'ERROR';
        //         }
        //     })
        //     .catch(res => {

        //         console.log('Catch res: ', res)
        //         return 'ERROR';
        //     })
    }
    
    const [handleChange, handleSubmit, formInput, notifyWarning] = useForm(record, handleSubmitCallback );

    return <>
            <AppNavbar />

            <div style={{ padding: "20px", maxWidth: "420px", margin: "50px auto" }}>
                <h2>{title}</h2>
            <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formGroupName" >
                        <Form.Label>Name</Form.Label>
                    <Form.Control name="name" placeholder="Product name" value={formInput.name} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group controlId="formGroupPrice" >
                        <Form.Label>Price</Form.Label>
                        <Form.Control name="price" placeholder="on €" value={formInput.price} onChange={handleChange} type="number" />
                    </Form.Group>
                    <Form.Group controlId="formGroupPhoto" >
                        <Form.Label>Photo</Form.Label>
                        <Form.Control name="photo" placeholder="Select a prety photo" value={formInput.photo} onChange={handleChange} />
                    </Form.Group>
                    {/* */} <Form.Group controlId="formGroupType" >
                        <Form.Label>Type</Form.Label>
                        {TYPES.map(type => (
                            <div key={`inline-${type}`} className="mb-3">
                                <Form.Check inline type='radio' id={`check-api-${type}`}>
                                    <Form.Check.Input
                                        name='type'
                                        value={`${type}`}
                                        type='radio'
                                        onChange={handleChange}
                                        checked={`${type}` === formInput.type}
                                    />
                                    <Form.Check.Label style={{ textTransform: 'capitalize' }}>{` ${type}`}</Form.Check.Label>
                                </Form.Check>
                            </div>
                        ))}
                    </Form.Group>
                    <Form.Group controlId="formGroupDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control name="description" as="textarea" rows="3" value={formInput.description} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group controlId="formGrouptags" >
                        <Form.Label>Tag</Form.Label>
                        <TagSelect onChange={handleChange} value={formInput.tags} isMulti />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Save
                    </Button>
                <Button variant="secondary" className="float-right" onClick={() => history.goBack()}>Go back</Button>
                </Form>
            </div>
        </>
}

export default AdEdit;