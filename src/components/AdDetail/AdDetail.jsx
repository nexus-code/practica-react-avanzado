import React, { useEffect, useState } from "react";
import { useParams, useHistory } from 'react-router';
import { getAdDetail } from '../../services/AdService';

import { withRouter }  from "react-router-dom";
import { UserContext } from '../../context/UserContext'
import { Button, Spinner }    from 'react-bootstrap'
import { getUserLS, isEmpty } from '../../utils/localStorage';

import AppNavbar       from '../AppNavbar/AppNavbar';


//             getAdDetail(this.state.AdID).then(ad => {

//                 if (ad.hasOwnProperty('success')) {

//                     this.props.history.push("/404");
//                 } else {

//                     this.setState({ ad });
//                 }
//             });

const alternativeLoadDetail = (id) => {

    getAdDetail(id).then(ad => {

        if (ad.hasOwnProperty('success')) {

            this.props.history.push("/404");
        } else {

            this.setState({ ad });
        }
    });
}

const getAdFromAPI = (id) => {
    // load detail without store charged
    
    const result = getAdDetail(id).then(function (response) {
        return response;
    }  );

    console.log('getAdFromAPI result', result);

    return result;
};


const getAdFromStore = (ads, id) => {
    // ad stored by redux
    return ads.filter(ad => ad.id === id)[0];
};


const getAd = (adsStore, id) =>{

    console.log('ads getAd', adsStore.ads.length);

    return typeof adsStore.ads.length !== 'undefined' ? getAdFromStore(adsStore.ads, id) : getAdFromAPI(id); 
};


function AdDetail(ads) {

    console.log('useParams', useParams());
    console.log('useHistory', useHistory());

    // console.log('ads', ads);

    const { id } = useParams();

    const ad = getAd(ads, id);
    
    console.log('ad', ad);

    // const ad = null;
    
    return <>
        <AppNavbar />
        <div className="container">
            {
                ad
                &&
                <div>
                    <img src={ad.photo} alt={ad.name} />

                    <h1 style={{
                        color: ad.type = 'sell' ? 'green' : 'blue'
                    }}>{ad.name} <span className='badge badge-primary'>{ad.price}€</span>
                    </h1>
                    <p>{ad.description}</p>
                    <p>
                        {
                            ad.tags.map(tag => <span className='badge badge-secondary p-2 mr-2' key={tag}> {tag} </span>)
                        }
                    </p>

                    {

                    }
                    <br />
                    <hr />
                    <br />
                    {/* <Button className='btn btn-warning' onClick={this.editAdvert} style={{ float: 'right' }} >Edit</Button>
                    <Button className='btn btn-dark' onClick={this.goBack} >Go back</Button> */}
                </div>
            }

            {
                !ad
                &&
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            }
        </div>
    </>;

}

// class AdDetail extends React.Component {

//     static contextType = UserContext;

//     constructor(props) {
//         super(props);

//         const user = getUserLS();
//         if (isEmpty(user)) {

//             this.gotoRegisterWithoutUser();

//         } else {

//             this.state = {
//                 AdID: this.props.match.params.id
//             };

//             this.goBack = this.goBack.bind(this);
//             this.editAdvert = this.editAdvert.bind(this);

//             getAdDetail(this.state.AdID).then(ad => {
                
//                 if (ad.hasOwnProperty('success')) {

//                     this.props.history.push("/404");
//                 } else {
                    
//                     this.setState({ ad });
//                 }
//             });
//         }
//     }

//     gotoRegisterWithoutUser() {

//         this.props.history.push("/register");
//     }

//     goBack(){

//         this.props.history.goBack();
//     }

//     editAdvert() {

//         this.props.history.push(`../advert/edit/${this.state.AdID}`);
//     }

//     componentDidMount() {

//         this.recoverContext();
//     }

//     recoverContext() {
//         //Recover context from localStorage (recovered on this.state.user)

//         if (isEmpty(this.context.user))
//             this.context.updateUser(getUserLS());
//     }
    
//     render() {

//         if (isEmpty(this.state)) {

//             // there is no local user but the component needs to be rendered
//             return(<></>);
//         }

//         const { ad } = this.state;

//         return (
//             <>
//                 <AppNavbar />
//                 <div className="container">
//                     {
//                         ad
//                         &&
//                         <div>
//                             <img src={ad.photo} alt={ad.name} />

//                             <h1 style={{
//                                 color: ad.type = 'sell' ? 'green' : 'blue'
//                                 }}>{ ad.name } <span className='badge badge-primary'>{ad.price}€</span>
//                             </h1>
//                             <p>{ ad.description }</p>
//                             <p>
//                                 {
//                                     ad.tags.map(tag => <span className='badge badge-secondary p-2 mr-2' key={tag}> { tag } </span> )
//                                 }
//                             </p>

//                             {

//                             }
//                             <br />
//                             <hr />
//                             <br />
//                             <Button className='btn btn-warning' onClick={ this.editAdvert } style={{ float:'right'}} >Edit</Button> 
//                             <Button className='btn btn-dark' onClick={ this.goBack } >Go back</Button>
//                         </div>
//                     }

//                     {
//                         !ad
//                         &&
//                         <Spinner animation="border" role="status">
//                             <span className="sr-only">Loading...</span>
//                         </Spinner>
//                     }
//                 </div>
//             </>
//         );
//     }
// }

export default withRouter(AdDetail);