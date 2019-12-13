import React from 'react'
import HocForm from '../Form/HocForm'
import AppNavbar from '../AppNavbar/AppNavbar';

const AdEdit = (ads, props) => { 

    return( 
        <>
            <AppNavbar />

            <div style={{ padding: "20px", maxWidth: "420px", margin: "50px auto" }}>
                <HocForm {...props} />
            </div>
        </>
        );

}
export default AdEdit;