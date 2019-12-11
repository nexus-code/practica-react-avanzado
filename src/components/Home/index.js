
import { connect } from 'react-redux';
import { getAds } from '../../store/ads/selectors'

import Home from './Home';

function mapStateToProps(state, ownProps) {
    return {
        bikes: getAds(state.ads, ownProps),
    };
}

export default connect(
    mapStateToProps,
    null,
)(Home);