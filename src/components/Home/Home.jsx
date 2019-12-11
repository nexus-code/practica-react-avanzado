import React     from "react";
import AppNavbar from '../AppNavbar/AppNavbar';

import AdList        from '../AdList/AdList';



export default class Home extends React.Component {

    render() {


        const a = this.props.loadAds();
        console.log ('ads?', a);

        const { ads } = a;


        return (           
            <>
                <AppNavbar />

                {
                    ads
                    &&
                    ads.length
                    &&
                    <AdList ads={ ads } />
                }
            </>
        );
    }
}