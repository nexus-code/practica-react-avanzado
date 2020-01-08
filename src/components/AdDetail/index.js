import { connect } from 'react-redux';

import { getUser } from '../../store/user/selectors';
import { getAds } from '../../store/ads/selectors';
import { fetchAd } from '../../store/ads/actions';

import AdDetail from './AdDetail';

const mapStateToProps = (store, ownProps) => {

    return {
        user: getUser(store),
        ads: getAds(store),
        ownProps,
    }
};


const mapDispatchToProps = dispatch => ({
    loadAd: (id) => dispatch(fetchAd(id)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    // null,
)(AdDetail);
