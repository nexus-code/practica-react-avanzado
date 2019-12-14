import React from 'react'
import { useParams, useHistory } from 'react-router';
import { useGetAd } from '../../store/ads/selectors';
import HookForm from '../Form/HookForm'
import AppNavbar from '../AppNavbar/AppNavbar';

function AdEdit(ads) {

    const { id } = useParams();
    const history = useHistory();
    const ad = useGetAd(ads, id);

    console.log('AdEdit', ads);
    return( 
        <>
            <AppNavbar />

            <div style={{ padding: "20px", maxWidth: "420px", margin: "50px auto" }}>
                <HookForm {...ads} />
            </div>
        </>
        );

}

export default AdEdit;