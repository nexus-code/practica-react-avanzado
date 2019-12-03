import { connect } from 'react-redux';

import App from './App';
import { setUser } from '../../store/user.actions';
// import { setAds } from '../../store/ads.actions';

// function mapDispatchToProps(dispatch) {
//   return {
//     loadAds: ads => dispatch(setAds(ads)),
//   };
// }

const mapDispatchToProps = {
    registerUser: setUser,
    // loadAds: setAds,
};

export default connect(
    null,
    mapDispatchToProps,
)(App);
