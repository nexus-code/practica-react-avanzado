import React from 'react'
import { useParams, useHistory } from 'react-router';
import { useGetAdFromAPI, getAdFromStore } from '../../store/ads/selectors';
import HookForm from '../Form/HookForm'
import AppNavbar from '../AppNavbar/AppNavbar';
import { Button } from 'react-bootstrap';

import fieldsForm from './utils/fields'

function AdEdit(props) {
    
    const { id } = useParams();
    const history = useHistory();
    const { ads } = props;

    // if (typeof ads.length === 'undefined' ){
    //     return<>
    //         <AppNavbar />
    //         <div className="container">
    //             <br />
    //             <h3> Incorrect access </h3>
    //             <p>Follow the usual path to edit an ad </p>
    //             <br />
    //             <Button className='btn btn-default' onClick={() => history.push(`/`)} >Go Home</Button>
    //         </div>;
    //     </>
    // }
   
    const ad = useGetAdFromAPI(ads, id);
    // console.log('AdEdit ad ', ad);

    const formProps = {
        ...props,
        fieldsForm: fieldsForm,
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