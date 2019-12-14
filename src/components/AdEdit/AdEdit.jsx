import React from 'react'
// import HocForm from '../Form/HocForm'
import HookForm from '../Form/HookForm'
import AppNavbar from '../AppNavbar/AppNavbar';

// const AdEdit = (ads, props) => { 
function AdEdit(props) {

    return( 
        <>
            <AppNavbar />

            <div style={{ padding: "20px", maxWidth: "420px", margin: "50px auto" }}>
                {/* <HocForm {...props} /> */}
                <HookForm {...props} />
            </div>
        </>
        );

}
export default AdEdit;