import React     from "react";
import AppNavbar from '../AppNavbar/AppNavbar';

import AdList        from '../AdList/AdList';

export default class Home extends React.Component {

    componentDidMount() {
        this.loadAds();
    }

    loadAds = this.props.loadAds;

    render() {

        console.log('this.props::', this.props);
        
        const { ads } = this.props; //error


        return (
            <>
                <AppNavbar />

                {
                    ads
                    &&
                    ads.length
                    &&
                    <AdList ads={ads} />
                }
            </>
        );
    }
}