// export function getAds(ads, filter) {

//     // basic implementation

//     return ads;
// }

export function getAds(state) {

    // basic implementation

    console.log('getAds state', state);


    return state.ads.ads;
}


export const getAd = (props, id) => {

    //Improve this on store!!

    try{
        
        return props.ads.filter(ad => ad.id === id)[0];
    }
    catch(err){
        
        return props.ads.ads.filter(ad => ad.id === id)[0];
    }

};

export const editAd = (id) => {


}