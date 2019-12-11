
import { connect } from 'react-redux';
import { fetchAds } from '../../store/ads/actions'

import Home from './Home';

// function mapDispatchToProps(dispatch) {
//   return {
//     loadAds: () => dispatch(fetchAds()),
//   };
// }

const mapDispatchToProps = {
    loadAds: fetchAds,
};


function mapStateToProps(state) {
    return state.ads.ui;
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Home);