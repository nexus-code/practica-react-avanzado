import { connect } from 'react-redux';

import { getUser } from '../../store/user/selectors';
import { getAds } from '../../store/ads/selectors';
// import { fetchAds } from '../../store/ads/actions';

import AdDetail from './AdDetail';

const mapStateToProps = store => {

    return {
        user: getUser(store),
        ads: getAds(store),
    }
};

export default connect(
    mapStateToProps,
    null,
)(AdDetail);
