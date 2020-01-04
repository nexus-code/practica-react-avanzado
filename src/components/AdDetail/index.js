import { connect } from 'react-redux';

import { getUser } from '../../store/user/selectors';
import { getAds } from '../../store/ads/selectors';

import AdDetail from './AdDetail';

// const mapStateToProps = store => (
//     {
//     user: getUser(store),
//     ads: getAds(store),
// });


const mapStateToProps = store => {

    console.log('mapStateToProps', store);
    return {
        user: getUser(store),
        ads: getAds(store),
    }
};

export default connect(
    mapStateToProps,
    null,
)(AdDetail);
