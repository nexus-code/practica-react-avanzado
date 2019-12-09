import React     from "react";
import AppNavbar from '../AppNavbar/AppNavbar';
import { UserContext } from '../../context/UserContext'
import { getUserLS } from '../../utils/localStorage';
import * as API      from '../../services/AdService';
import AdList        from '../AdList/AdList';



export default class Home extends React.Component {

    /* Show ads by user selected tag */
    
    static contextType = UserContext;


    constructor(props) {
        super(props);
       
        //constructor will been replaced by redux:

        console.log('HOME constructor LLEGA');

        this.state = {
            ads: [],
            user: getUserLS()
        }

        this.searchAds();
    }

    searchAds = () => {

        API.searchAds().then(ads => {
            this.setState({
                ads
            })
        });
    }
    
    render() {
        const { ads } = this.state;

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